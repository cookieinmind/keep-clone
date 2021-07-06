import React from "react";
import { useRef } from "react";

export interface iInputProps {
  isInputFocused: boolean;
  setIsInputFocused: (newVal: boolean) => void;
}

export const Input: React.FC<iInputProps> = ({
  isInputFocused,
  setIsInputFocused,
}) => {
  const input = useRef(null);

  const containerStyles = {
    padding: "24px 32px",
    border: "solid 1px black",
    gridColumn: "5/9",
    borderRadius: "15px",
    boxShadow: "4px 4px 10px rgba(0, 0,0, 0.25)",
    display: "flex",
    justifyContent: "center",
    maxHeight: "100px",
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsInputFocused(true);
  };

  const inputStyles = {};

  return (
    <div style={containerStyles}>
      <input
        style={inputStyles}
        ref={input}
        onFocus={handleFocus}
        type="text"
        name="note"
        placeholder="Note"
      />
      {/* <button onClick={handleSubmit}>Add note</button> */}
    </div>
  );
};
