export interface Book {
  name: string;
  author: string;
  datePublished: Date;
  price: number;
  numSales?: number;
  seriesName?: string;
}
