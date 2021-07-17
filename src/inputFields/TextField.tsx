import React from "react";
import { useRef } from "react";
import { InputBase, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    border: "0px solid black",
  },
});

export interface TextFieldProps {
  placeholder: string;
  submit: () => void;

  content: string;
  setContent: (content: string) => void;

  tags: string[];
  setTags: (tags: string[]) => void;

  inputRef: React.RefObject<HTMLInputElement> | null;
  onLostFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  submit,
  content,
  setContent,
  tags,
  setTags,
  onLostFocus,
  inputRef: contentRef,
}) => {
  const classes = useStyles();
  const isCreatingTag = useRef<boolean>(false);
  const tag = useRef<string>("");

  //* Methods that handle changes the user makes
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  //* Methods that change state
  const checkForTagCreation = (e: React.KeyboardEvent) => {
    //Ignore the shift stroke
    if (e.key === "Shift") return;

    const pressedHashtag = e.key === "#";
    const pressedSpace = e.key === " ";

    if (pressedHashtag) {
      isCreatingTag.current = true;
      return;
    } else if (pressedSpace) isCreatingTag.current = false;

    const thereIsATagToSubmit = tag.current !== "";

    if (isCreatingTag.current) {
      tag.current = updateTag(e.key, tag.current);
    } else if (thereIsATagToSubmit) {
      addTagToArray();
    }

    const keyIsEnter = e.code === "Enter";
    const isCtrlPressed = e.nativeEvent.ctrlKey;
    if (keyIsEnter && isCtrlPressed) {
      submitContent();
    }
  };

  const addTagToArray = () => {
    setTags([...tags, tag.current]);
    const cleanContent = removeTagFromContent(tag.current, content);
    setContent(cleanContent);
    tag.current = "";
  };

  const submitContent = () => {
    const thereIsATagToSubmit = tag.current !== "";
    if (thereIsATagToSubmit) addTagToArray();
    submit();
  };

  //*Helper methods
  const updateTag = (newTerm: string, oldTag: string): string => {
    let newTag = oldTag;
    if (newTerm === "Backspace") {
      if (oldTag.length < 1) isCreatingTag.current = false;
      const oneLessTerm = oldTag.slice(0, oldTag.length - 1);
      newTag = oneLessTerm;
    } else {
      newTag += newTerm;
    }

    return newTag;
  };

  const removeTagFromContent = (tag: string, content: string): string => {
    let output: undefined | string = "";

    output = content.replace(tag, "");

    return output.replace("#", "").trim() + " ";
  };

  return (
    <InputBase
      placeholder={placeholder}
      multiline
      className={classes.root}
      onBlur={onLostFocus}
      onChange={handleContentChange}
      inputRef={contentRef}
      value={content}
      // Using onKeyUp so the backspace can be logged
      onKeyUp={checkForTagCreation}
    />
  );
};

export default TextField;
