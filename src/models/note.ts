import { Tag } from "./tag";

export type Note = {
  title?: string;
  id?: number | string;
  content: string;
  tags: Tag[];
  date?: string;
  status: NoteStatus;
};

export enum NoteStatus {
  alive = "alive",
  deleted = "deleted",
  archived = "archived",
}
