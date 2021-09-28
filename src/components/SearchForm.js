import React, { useState } from "react";

export default function SearchForm() {
  const [isFocus, setIsFocus] = useState(false);
  const style = isFocus
    ? { "background-color": "#ffffff" }
    : { "background-color": "#c3dcf7" };
  return (
    <form style={style}>
      <span className="material-icons">search</span>
      <input
        onFocus={(e) => {
          setIsFocus(true);
        }}
        onBlur={(e) => {
          setIsFocus(false);
        }}
        placeholder={isFocus ? "Search" : ""}
      />
      {isFocus ? <span className="material-icons">close</span> : ""}
    </form>
  );
}
