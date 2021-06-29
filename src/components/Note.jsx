import React from "react";
import Deleteicon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <Deleteicon />
      </button>
      <Checkbox
        color="checkbox with default color"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}

export default Note;
