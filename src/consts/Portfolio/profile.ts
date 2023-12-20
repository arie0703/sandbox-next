export const profile = {
  name: 'K.A.',
  introduction: `2022年に求人広告系事業会社のエンジニア職として新卒入社。\n最初の1年はインフラ系の部署でAWSやTerraformを使用したクラウドの構築・保守を経験。\nその後、医療・介護系求人サイトの開発チームに異動し、現在はNext.jsによるフロントエンド開発やパフォーマンス監視等のSRE業務に取り組んでいる。`,
  experiences: [
    {
      image: '/images/sample-app-square.jpeg',
      content: 'ECS Fargateを用いたコンテナの構築',
    },
    {
      image: '/images/sample-app-square.jpeg',
      content: 'CodePipelineを用いたCI/CDの構築',
    },
    {
      image: '/images/sample-app-square.jpeg',
      content: 'Terraformを用いたAWSのインフラ構築',
    },
    {
      image: '/images/sample-app-square.jpeg',
      content: 'New Relicを用いたパフォーマンス監視',
    },
    {
      image: '/images/sample-app-square.jpeg',
      content: 'TypeScript, Next.jsを用いたフロントエンド開発',
    },
    {
      image: '/images/sample-app-square.jpeg',
      content: 'Jestを用いたユニットテストの実装',
    },
    {
      image: '/images/sample-app-square.jpeg',
      content: 'Lambda・Slack botを用いたレビュー管理システムの構築',
    },
    {
      image: '/images/sample-app-square.jpeg',
      content: '内定者を対象としたAWS勉強会の実施',
    },
  ]
} as const;
