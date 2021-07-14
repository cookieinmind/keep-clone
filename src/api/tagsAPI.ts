import { Tag } from "../models/tag";

const BASE_URL = "http://localhost:8000/tags";

export const GetTags = async (): Promise<Tag[]> => {
  //1 call the api
  const response = await fetch(BASE_URL);
  return response.json();
};

export const DeleteTag = async (tag: Tag) => {
  const id = tag.id;

  const url = BASE_URL + "/" + id;

  const body = { method: "DELETE" };

  const response = await fetch(url, body);

  return response.json();
};

export const AddTags = async (tags: Tag[]) => {
  try {
    const responses = await Promise.all(
      tags.map((tag) => {
        const body = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tag),
        };

        return fetch(BASE_URL, body);
      })
    );

    console.log("responses:", responses);
    return await responses;
  } catch (err) {
    console.log("api err:", err);
  }
};
