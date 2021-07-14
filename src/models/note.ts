import { Tag } from "./tag";

export type Note = {
  id?: number;
  content: string;
  tags?: Tag[];
  date?: string;
};
