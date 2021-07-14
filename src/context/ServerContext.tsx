import { useContext } from "react";
import { createContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddTags, GetTags } from "../api/tagsAPI";
import { DeleteNote, GetNotes } from "../api/notesAPI";
import { Note } from "../models/note";
import { AddNote } from "../api/notesAPI";
import { Tag } from "../models/tag";

//!Internal
const mockContext = {
  tags: [],
  notes: [],
  createNote: () => console.log("loading context"),
  deleteNote: () => console.log("loading context"),
};

const ServerCtx = createContext<ServerContext>(mockContext);

interface ServerContext {
  tags: Tag[];
  notes: Note[];
  createNote: (note: Note) => void;
  deleteNote: (note: Note) => void;
}

interface ContextProps {
  children: React.ReactNode;
}

//!Exports

export const useServerContext = () => {
  const response = useContext(ServerCtx);
  return response;
};

const ServerContextProvider: React.FunctionComponent<ContextProps> = ({
  children,
}) => {
  const qryClient = useQueryClient();

  //* Queries
  const { data: notes } = useQuery<Note[], Error>("notes", GetNotes);
  const { data: tags } = useQuery<Tag[], Error>("tags", GetTags);

  //*Mutations
  const { mutateAsync: submitNoteAsyncMutation } = useMutation(AddNote);
  const { mutateAsync: addTagAsyncMutation } = useMutation(AddTags);
  const { mutateAsync: deleteNoteAsyncMutation } = useMutation(DeleteNote, {
    onSuccess: () => resetNoteQueries(),
  });

  //* Methods
  const resetNoteQueries = () => {
    qryClient.invalidateQueries("notes");
  };

  const createNote = async (note: Note) => {
    await submitNoteAsyncMutation(note);
    resetNoteQueries();

    const newTags = note.tags?.filter((tag) => {
      return tags?.includes(tag) === false;
    });

    if (newTags && newTags.length > 0) {
      //add new tags to the list
      await addTagAsyncMutation(newTags);
      qryClient.invalidateQueries("tags");
    }
  };

  const deleteNote = async (note: Note) => {
    await deleteNoteAsyncMutation(note);
    resetNoteQueries();
  };

  //?Things this exposes to everyone else
  const contextValue: ServerContext = {
    notes: notes ? notes : [],
    tags: tags ? tags : [],
    createNote,
    deleteNote,
  };

  return (
    <ServerCtx.Provider value={contextValue}>{children}</ServerCtx.Provider>
  );
};

export default ServerContextProvider;
