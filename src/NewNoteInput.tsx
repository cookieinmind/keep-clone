import React, { ChangeEvent } from "react";

export interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault();
    setNote(event.target.value);
  };

  const handleSubmit = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        value={note}
        onChange={handleChange}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={handleSubmit}>Add note</button>
    </div>
  );
};
