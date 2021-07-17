import { Tag } from "../models/tag";
import { getTags, saveTags } from "./localStorage/localStorage";

const BASE_URL = "http://localhost:8000/tags";

export const GetTags = async (): Promise<Tag[]> => {
  return getTags();
};

export const DeleteTag = async (tag: Tag) => {
  const id = tag.id;

  const url = BASE_URL + "/" + id;

  const body = { method: "DELETE" };

  const response = await fetch(url, body);

  return response.json();
};

export const AddTags = async (tags: Tag[]) => {
  return saveTags(tags);
};
