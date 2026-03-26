export interface Term {
  id: string;
  term: string;
  arabicTerm: string;
  region: string;
  flag: string;
  partOfSpeech: string;
  frequency: 'Low' | 'Medium' | 'High' | 'Very High';
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  usageStats: { region: string; percentage: number }[];
  relatedTerms: string[];
  proposals: Proposal[];
}

export interface Proposal {
  id: string;
  termId: string;
  meaning: string;
  example?: string;
  arabicExample?: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  authorTitle?: string;
  votes: number;
  commentsCount: number;
  timestamp: string;
}

export interface Contributor {
  id: string;
  name: string;
  avatar: string;
  definitionsCount: number;
  rank: number;
}

export interface DialectRegion {
  id: string;
  name: string;
  countries: string;
  description: string;
  termCount: string;
  imageUrl: string;
}
