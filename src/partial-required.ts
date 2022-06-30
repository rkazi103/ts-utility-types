import { Book } from "./book";

type BookPartial = Partial<Book> & { name: string };
type BookRequired = Required<Book>;
