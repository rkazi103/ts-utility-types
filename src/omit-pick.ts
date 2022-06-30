import { Book } from "./book";

type BookInfo = Omit<Book, "price" | "numSales">;
interface IBookInfo extends Omit<Book, "price" | "numSales"> {}

type BookInfoPick = Pick<
  Book,
  "name" | "author" | "datePublished" | "seriesName"
>;
