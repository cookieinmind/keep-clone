import { useContext } from "react";
import { createContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddTags, GetTags } from "../api/tagsAPI";
import { Note } from "../models/note";
import { Tag } from "../models/tag";

const TagCtx = createContext<ITagContext | null>(null);

export interface ITagContext {
  tags?: Tag[];
  noteWasCreated: (note: Note) => void;
}

export interface ContextProps {
  children: React.ReactNode;
}

export const useTagContext = () => {
  const response = useContext(TagCtx);
  return response;
};

const TagContextProvider: React.FunctionComponent<ContextProps> = ({
  children,
}) => {
  const { mutateAsync: addTagAsync } = useMutation(AddTags);
  const qryClient = useQueryClient();

  //*1) Tener una lista de todos los tags
  const { data: tags } = useQuery<Tag[], Error>("tags", GetTags);

  //*2) Tener una manera de ser notificado que una nota nueva fue agregada y que se debe actualizar la lista de tags
  const noteWasCreated = async (note: Note) => {
    const newTags = note.tags?.filter((tag) => {
      return tags?.includes(tag) == false;
    });

    if (newTags && newTags.length > 0) {
      //add new tags to the list
      await addTagAsync(newTags);
      qryClient.invalidateQueries("tags");
    }
  };

  //?Things this exposes to everyone else
  const contextValue: ITagContext = {
    tags,
    noteWasCreated,
  };

  return <TagCtx.Provider value={contextValue}>{children}</TagCtx.Provider>;
};

export default TagContextProvider;
