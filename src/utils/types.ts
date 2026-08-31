export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  other: Record<string, string>;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}
