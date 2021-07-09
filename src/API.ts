import { Note } from "./state/models/note";

const BASE_URL = "http://localhost:8000/notes";

export const GetNotes = async (): Promise<Note[]> => {
  //1 call the api
  const response = await fetch(BASE_URL);
  return response.json();
};
