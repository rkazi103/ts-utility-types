import { Book } from "./book";

const myObj: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};

const shelf: Record<number, Book> = {
  0: {
    name: "Into Thin Air",
    author: "Jon Krakauer",
    datePublished: new Date(1997, 1),
    price: 14,
  },
  1: {
    name: "1984",
    author: "George Orwell",
    datePublished: new Date(1949, 6),
    price: 12,
  },
};
