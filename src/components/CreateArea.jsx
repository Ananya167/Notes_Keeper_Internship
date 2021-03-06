import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a Note..."
          rows="3"
        ></textarea>
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
