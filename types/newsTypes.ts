export interface NewsAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: NewsAuthor;
}
