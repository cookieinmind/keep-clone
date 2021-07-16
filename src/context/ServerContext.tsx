import { useContext } from "react";
import { createContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddTags, GetTags } from "../api/tagsAPI";
import { DeleteNote, GetNotes, UpdateNote } from "../api/notesAPI";
import { Note, NoteStatus } from "../models/note";
import { AddNote } from "../api/notesAPI";
import { Tag } from "../models/tag";

//!Internal
const mockContext = {
  tags: [],
  notes: [],
  createNote: () => console.log("loading context"),
  deleteNote: () => console.log("loading context"),
  archiveNote: () => console.log("loading context"),
};

const ServerCtx = createContext<ServerContext>(mockContext);

interface ServerContext {
  tags: Tag[];
  notes: Note[];
  createNote: (note: Note) => void;
  deleteNote: (note: Note) => void;
  archiveNote: (note: Note) => void;
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
  const { data: notesOnServer } = useQuery<Note[], Error>("notes", GetNotes);
  const { data: tagsOnServer } = useQuery<Tag[], Error>("tags", GetTags);

  //*Mutations
  const { mutateAsync: saveNoteAsyncMutation } = useMutation(AddNote);
  const { mutateAsync: addTagAsyncMutation } = useMutation(AddTags);
  const { mutateAsync: updateNoteAsync } = useMutation(UpdateNote);
  const { mutateAsync: deleteNoteAsyncMutation } = useMutation(DeleteNote, {
    onSuccess: () => resetNoteQueries(),
  });

  const updateServer = async () => {
    // if (!notesOnServer) return;
    // console.log("updating");
    // for (let index = 0; index < notesOnServer.length; index++) {
    //   const note = notesOnServer[index];
    //   note.status = NoteStatus.Alive;
    //   console.log("on note:", note);
    //   await permDeleteNoteAsyncMutation(note);
    //   await saveNoteAsyncMutation(note);
    // }
    // resetNoteQueries();
    // resetTagQueries();
    // console.log("finish update");
  };

  //* Methods
  const resetNoteQueries = () => {
    qryClient.invalidateQueries("notes");
  };

  const resetTagQueries = () => {
    qryClient.invalidateQueries("tags");
  };

  const createNote = async (note: Note) => {
    console.log("creating");
    await saveNoteAsyncMutation(note);
    resetNoteQueries();

    const newTags = note.tags?.filter((tag) => {
      console.log(tagsOnServer, tag);

      //compare names so it ignores the id
      return tagsOnServer?.some((t) => t.name === tag.name) === false;
    });

    if (newTags && newTags.length > 0) {
      await addTagAsyncMutation(newTags);
      resetTagQueries();
    }

    // await updateServer();
  };

  const deleteNote = async (note: Note) => {
    switch (note.status) {
      case NoteStatus.alive:
      case NoteStatus.archived:
        note.status = NoteStatus.deleted;
        await updateNoteAsync(note);
        break;

      case NoteStatus.deleted:
        await deleteNoteAsyncMutation(note);
        break;

      default:
        throw new Error("server context error");
    }

    resetNoteQueries();
  };

  const archiveNote = async (note: Note) => {
    console.log("server context", "to implement archive");
  };

  //? Things this exposes to everyone else
  const contextValue: ServerContext = {
    notes: notesOnServer ? notesOnServer : [],
    tags: tagsOnServer ? tagsOnServer : [],
    createNote,
    deleteNote,
    archiveNote,
  };

  return (
    <ServerCtx.Provider value={contextValue}>{children}</ServerCtx.Provider>
  );
};

export default ServerContextProvider;
