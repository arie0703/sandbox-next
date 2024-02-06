import { ArticleData, QiitaArticle } from "@/types/qiita";
import { NextResponse } from "next/server";

export async function GET() {

	const qiitaAccessToken = process.env.QIITA_ACCESS_TOKEN;
	const fetchedResult = await fetch('https://qiita.com/api/v2/items?query=user:arie0703', {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${qiitaAccessToken}`
		}
	}).then(
		async (response) => {
			if (!response.ok) {
				throw new Error('ERROR');
			}
			return await response.json()
		}
	)

	var articles: ArticleData[] = [];
	fetchedResult.map((article: QiitaArticle) => {
		articles.push({
			id: article.id,
			title: article.title,
			url: article.url,
			tags: article.tags
		})
	})
	const response = NextResponse.json({ msg: 'success', articles: articles })
	return response;
}
