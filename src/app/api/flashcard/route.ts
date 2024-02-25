import { NextResponse } from "next/server";
import { Client } from "@notionhq/client"

export async function GET() {

  const notion = new Client({ auth: process.env.NOTION_SECRET });
  const notionDetabaseId = process.env.NOTION_DATABASE_ID
  const notionResponse = await notion.databases.query(
    {
      database_id: notionDetabaseId!
    }
  );

  // TODO: anyをどうにかする
  const results: any[] = [];

  notionResponse.results.map((data: any) => {
    results.push({
      frontText: data.properties["frontText"].title[0].plain_text,
      backText: data.properties["backText"].rich_text[0].plain_text
    });
  })
  const response = NextResponse.json({ msg: 'success', cards: results })
  return response;
}
