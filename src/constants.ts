import { Term, Contributor, DialectRegion } from './types';

export const MOCK_TERMS: Term[] = [
  {
    id: '1',
    term: 'Barsa',
    arabicTerm: 'برشة',
    region: 'Tunisian Dialect',
    flag: '🇹🇳',
    partOfSpeech: 'Adverb / Adjective',
    frequency: 'Very High',
    sentiment: 'Positive',
    usageStats: [
      { region: 'Tunis City', percentage: 92 },
      { region: 'Sousse & Coast', percentage: 88 },
      { region: 'South Tunisia', percentage: 65 }
    ],
    relatedTerms: ['خيرات', 'ياسر', 'قوي', 'بالقدا'],
    proposals: [
      {
        id: 'p1',
        termId: '1',
        meaning: 'Meaning "A lot" or "Very much". It is the quintessential Tunisian word for intensity or abundance.',
        arabicExample: 'نحبك برشة يا تونس',
        example: '"I love you very much, Tunisia."',
        tags: ['Street Slang', 'Tunis City'],
        author: 'Mehdi Jomaa',
        authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mehdi',
        authorTitle: 'Top Contributor',
        votes: 482,
        commentsCount: 24,
        timestamp: '2 days ago'
      },
      {
        id: 'p2',
        termId: '1',
        meaning: "Used as a quantifier for plural nouns. Equivalent to 'many' in English.",
        arabicExample: 'عندي برشة خدمة اليوم',
        example: '"I have a lot of work today."',
        tags: ['Formal', 'Sousse / Coast'],
        author: 'Selima B.',
        authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Selima',
        authorTitle: 'Linguist',
        votes: 128,
        commentsCount: 12,
        timestamp: '1 week ago'
      }
    ]
  },
  {
    id: '2',
    term: 'Yalla',
    arabicTerm: 'يلا',
    region: 'Levantine',
    flag: '🇱🇧',
    partOfSpeech: 'Interjection',
    frequency: 'Very High',
    sentiment: 'Positive',
    usageStats: [
      { region: 'Beirut', percentage: 98 },
      { region: 'Amman', percentage: 95 },
      { region: 'Damascus', percentage: 94 }
    ],
    relatedTerms: ['هيا', 'بسرعة', 'مشينا'],
    proposals: [
      {
        id: 'p3',
        termId: '2',
        meaning: 'Multi-purpose expression meaning "let\'s go," "hurry up," or "come on." The heartbeat of daily Arabic conversation.',
        arabicExample: 'يلا يا شباب، تأخرنا!',
        example: '"Come on guys, we are late!"',
        tags: ['Slang', 'Common'],
        author: 'Layla M.',
        authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla',
        authorTitle: 'Community Leader',
        votes: 3200,
        commentsCount: 156,
        timestamp: '2 days ago'
      }
    ]
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
    arabicTerm: 'شو في ما في؟',
    region: 'Lebanon',
    flag: '🇱🇧',
    partOfSpeech: 'Phrase',
    frequency: 'High',
    sentiment: 'Neutral',
    usageStats: [
      { region: 'Beirut', percentage: 95 },
      { region: 'Tripoli', percentage: 80 },
      { region: 'Sidon', percentage: 75 }
    ],
    relatedTerms: ['كيفك', 'شو الأخبار'],
    proposals: [
      {
        id: 'p1',
        termId: '1',
        meaning: 'تعبير لبناني يستخدم للسؤال عن الأحوال أو "ما الجديد؟". يستخدم بشكل يومي عند اللقاء بالأصدقاء.',
        example: 'شو في ما في اليوم؟',
        arabicExample: 'شو في ما في اليوم؟',
        tags: ['slang', 'greeting'],
        author: 'ziad_beirut',
        authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ziad',
        authorTitle: 'Senior Contributor',
        votes: 1200,
        commentsCount: 48,
        timestamp: '2 hours ago'
      }
    ]
  },
  {
    id: '2',
    term: 'طنش تعش',
    arabicTerm: 'طنش تعش',
    region: 'Egypt',
    flag: '🇪🇬',
    partOfSpeech: 'Proverb',
    frequency: 'Medium',
    sentiment: 'Positive',
    usageStats: [
      { region: 'Cairo', percentage: 90 },
      { region: 'Alexandria', percentage: 85 },
      { region: 'Giza', percentage: 80 }
    ],
    relatedTerms: ['كبر دماغك', 'فكك'],
    proposals: [
      {
        id: 'p2',
        termId: '2',
        meaning: 'نصيحة مصرية شهيرة تعني تجاهل المشاكل لتعيش براحة بال.',
        example: 'يا عم طنش تعش، متفكرش كتير.',
        arabicExample: 'يا عم طنش تعش، متفكرش كتير.',
        tags: ['slang', 'advice'],
        author: 'omar_cairo',
        authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar',
        authorTitle: 'Expert',
        votes: 850,
        commentsCount: 32,
        timestamp: '5 hours ago'
      }
    ]
  },
  {
    id: '3',
    term: 'زول',
    arabicTerm: 'زول',
    region: 'Sudan',
    flag: '🇸🇩',
    partOfSpeech: 'Noun',
    frequency: 'Very High',
    sentiment: 'Positive',
    usageStats: [
      { region: 'Khartoum', percentage: 100 },
      { region: 'Omdurman', percentage: 95 },
      { region: 'Port Sudan', percentage: 80 }
    ],
    relatedTerms: ['يا زول', 'صديق'],
    proposals: [
      {
        id: 'p3',
        termId: '3',
        meaning: 'كلمة سودانية أصيلة تعني "شخص" أو "إنسان"، وتستخدم للتعبير عن الصداقة والمودة.',
        example: 'يا زول كيف حالك؟',
        arabicExample: 'يا زول كيف حالك؟',
        tags: ['slang', 'friendship'],
        author: 'hassan_sd',
        authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan',
        authorTitle: 'Native Speaker',
        votes: 1500,
        commentsCount: 64,
        timestamp: '1 day ago'
      }
    ]
  }
];

export const SAVED_TERMS: Term[] = CONTRIBUTED_TERMS;
