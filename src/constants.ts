import { Term, Contributor, DialectRegion } from './types';

export const MOCK_TERMS: Term[] = [
  {
    id: '1',
    term: 'شو في ما في؟',
    arabicTerm: 'شو في ما في؟',
    transliteration: 'Shu el Qassa?',
    meaning: 'تعبير لبناني يستخدم للسؤال عن الأحوال أو "ما الجديد؟". يستخدم بشكل يومي عند اللقاء بالأصدقاء.',
    example: 'شو في ما في اليوم؟ كل شي تمام؟',
    region: 'Lebanon',
    flag: '🇱🇧',
    tags: ['slang', 'greeting'],
    author: 'ziad_beirut',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ziad',
    likes: 1200,
    dislikes: 12,
    comments: 48,
    timestamp: 'الآن',
    isNew: true
  },
  {
    id: '2',
    term: 'طنش تعش',
    arabicTerm: 'طنش تعش تنتعش',
    meaning: 'نصيحة مصرية شهيرة تعني تجاهل المشاكل لتعيش براحة بال.',
    example: 'يا عم طنش تعش، الدنيا مش مستاهلة كل الزعل ده.',
    region: 'Egypt',
    flag: '🇪🇬',
    tags: ['slang', 'advice'],
    author: 'omar_cairo',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar',
    likes: 850,
    dislikes: 5,
    comments: 32,
    timestamp: 'منذ ساعتين'
  },
  {
    id: '3',
    term: 'زول',
    arabicTerm: 'زول',
    meaning: 'كلمة سودانية أصيلة تعني "شخص" أو "إنسان"، وتستخدم للتعبير عن الصداقة والمودة.',
    example: 'يا زول، كيف أحوالك؟ مشتاقين والله.',
    region: 'Sudan',
    flag: '🇸🇩',
    tags: ['classic', 'identity'],
    author: 'sudan_vibes',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sudan',
    likes: 940,
    dislikes: 8,
    comments: 15,
    timestamp: 'منذ 5 ساعات'
  }
];

export const MOCK_CONTRIBUTORS: Contributor[] = [
  {
    id: '1',
    name: 'Omar K.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OmarK',
    definitionsCount: 842,
    rank: 1
  },
  {
    id: '2',
    name: 'Layla M.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla',
    definitionsCount: 615,
    rank: 2
  },
  {
    id: '3',
    name: 'Zaid A.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zaid',
    definitionsCount: 520,
    rank: 3
  }
];

export const MOCK_REGIONS: DialectRegion[] = [
  {
    id: 'maghrebi',
    name: 'Maghrebi',
    countries: 'Morocco, Algeria, Tunisia',
    description: 'Vibrant street scene in a blue-painted Moroccan city.',
    termCount: '1.2k',
    imageUrl: 'https://picsum.photos/seed/morocco/800/1000'
  },
  {
    id: 'levantine',
    name: 'Levantine',
    countries: 'Lebanon, Syria, Jordan, Palestine',
    description: 'Historic stone buildings in a narrow street of Beirut.',
    termCount: '2.8k',
    imageUrl: 'https://picsum.photos/seed/beirut/800/1000'
  },
  {
    id: 'egyptian',
    name: 'Egyptian',
    countries: 'The language of cinema & pop culture',
    description: 'Bustling urban street in Cairo at dusk.',
    termCount: '4.5k',
    imageUrl: 'https://picsum.photos/seed/cairo/800/1000'
  },
  {
    id: 'khaleeji',
    name: 'Khaleeji',
    countries: 'Saudi Arabia, UAE, Kuwait, Qatar',
    description: 'Futuristic skyline of Dubai at twilight.',
    termCount: '950',
    imageUrl: 'https://picsum.photos/seed/dubai/800/1000'
  }
];

export const CONTRIBUTED_TERMS: Term[] = [
  {
    id: '1',
    term: 'شو في ما في؟',
    meaning: 'تعبير لبناني يستخدم للسؤال عن الأحوال أو "ما الجديد؟". يستخدم بشكل يومي عند اللقاء بالأصدقاء.',
    region: 'Lebanon',
    flag: '🇱🇧',
    tags: ['slang', 'greeting'],
    likes: 1200,
    comments: 48,
    timestamp: '2 hours ago',
    author: 'ziad_beirut',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ziad'
  },
  {
    id: '2',
    term: 'طنش تعش',
    meaning: 'نصيحة مصرية شهيرة تعني تجاهل المشاكل لتعيش براحة بال.',
    region: 'Egypt',
    flag: '🇪🇬',
    tags: ['slang', 'advice'],
    likes: 850,
    comments: 32,
    timestamp: '5 hours ago',
    author: 'omar_cairo',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar'
  },
  {
    id: '3',
    term: 'زول',
    meaning: 'كلمة سودانية أصيلة تعني "شخص" أو "إنسان"، وتستخدم للتعبير عن الصداقة والمودة.',
    region: 'Sudan',
    flag: '🇸🇩',
    tags: ['classic', 'identity'],
    likes: 940,
    comments: 15,
    timestamp: '1 day ago',
    author: 'sudan_vibes',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sudan'
  }
];
