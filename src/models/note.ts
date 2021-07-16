import { Tag } from "./tag";

export type Note = {
  id?: number;
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
