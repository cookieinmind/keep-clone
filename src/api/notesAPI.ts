import { Note } from "../models/note";

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

export const AddNote = async (note: Note): Promise<Note> => {
  const body = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  };
  const response = await fetch(BASE_URL, body);

  return response.json();
};

export const UpdateNote = async (note: Note) => {
  const body = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  };

  const url = BASE_URL + "/" + note.id;

  console.log(url);

  const response = await fetch(url, body);

  return response.json();
};
