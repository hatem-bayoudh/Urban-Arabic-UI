export interface Term {
  id: string;
  term: string;
  arabicTerm?: string;
  transliteration?: string;
  meaning: string;
  example?: string;
  region: string;
  flag: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  likes: number;
  dislikes?: number;
  comments: number;
  timestamp: string;
  isNew?: boolean;
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
