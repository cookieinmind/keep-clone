import { Note } from "./state/models/note";

const BASE_URL = "http://localhost:8000/notes";

export const GetNotes = async (): Promise<Note[]> => {
  //1 call the api
  const response = await fetch(BASE_URL);
  return response.json();
};

export const DeleteNote = async (note: Note) => {
  const id = note.id;

  const url = BASE_URL + "/" + id;

  const body = { method: "DELETE" };

  const response = await fetch(url, body);

  return response.json();
};
