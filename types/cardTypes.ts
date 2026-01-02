
export interface Card {
  id: number;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc?: string;
}