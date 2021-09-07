import React, { useState } from "react";

import { MdDelete } from "react-icons/md";
import EditIcon from "@material-ui/icons/Edit";
import Draggable from "react-draggable";

const Note = ({ title, textbody, onDelete, id, onEdit }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newTextBody, setnewTextBody] = useState(textbody);
  const [editing, setEditing] = useState(false);

  const noteUpdater = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEditing(false);
        return onEdit({ newTitle, newTextBody, id });
      }}
    >
      <input
        type="text"
        value={newTitle}
        onChange={(e) => {
          return setNewTitle(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={newTextBody}
        onChange={(e) => {
          return setnewTextBody(e.target.value);
        }}
      ></input>
      <button id="submit-button" name="editButton" type="submit">
        Click me
      </button>
    </form>
  );

  return (
    <div className="note">
      <Draggable key={id}>
        {editing ? (
          noteUpdater
        ) : (
          <>
            <h3>{newTitle}</h3>
            <p>{newTextBody}</p>
            <button onClick={() => onDelete(id)}>
              <MdDelete className="mcdelete" size={25} />
            </button>
            <button type="button" onClick={() => setEditing(true)}>
              <EditIcon className="edit-icon" size={25} />
            </button>
          </>
        )}
      </Draggable>
    </div>
  );
};

export default Note;
