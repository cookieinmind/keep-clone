import { Tag } from "../models/tag";
import { deleteTag, getTags, saveTags } from "./localStorage/localStorage";

export const GetTags = async (): Promise<Tag[]> => {
  return getTags();
};

export const DeleteTag = async (tag: Tag) => {
  return deleteTag(tag);
};

export const AddTags = async (tags: Tag[]) => {
  return saveTags(tags);
};
