import { Member } from '@/types'
export const members: Member[] = [
  {
    name: 'Meijin',
    role: 'CTO',
    bio:
      'Webサービスを実現するための技術を何でもやっているエンジニア。特にフロントエンドが好き',
    avatarSrc: '/avatars/catnose.jpg',
    sources: [
      'https://note.com/meijin_garden/rss',
      'https://zenn.dev/meijin/feed',
      'https://qiita.com/mejileben/feed.atom',
    ],
    includeUrlRegex: 'qiita.com|zenn.dev|note.com',
    twitterUsername: 'meijin_garden',
    githubUsername: 'TeXmeijin',
    websiteUrl: 'https://meijin.dev',
  },
]
