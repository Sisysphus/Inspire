import React, { useState, useEffect } from "react";
import "./Header.css";
import { IoAddOutline } from "react-icons/io5";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Area = ({ onAdd }) => {
  const [Expand, isExpanded] = useState(false);
  const [dropDownOpen, setOpen] = useState(false);
  //  We create the set note via the "title" & "content" established via the name
  const [note, setNote] = useState(
    {
      title: "",
      note_id: "",
      textbody: "",
      required: true,
    },
    [],
    () => {
      const localData =
        localStorage.getItem("note") &&
        this.setNote({
          notes: JSON.parse(note),
        });
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  const handleExpand = () => {
    isExpanded(true);
  };

  function submitButton(event) {
    event.preventDefault();
    if (note.title !== "" && note.textbody !== "") {
      onAdd(note);
      setNote({
        title: "",
        textbody: "",
      });
    }
  }

  const toggle = () => setOpen(!dropDownOpen);

  return (
    <div>
      <form>
        {Expand && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            className="btn"
            required
          />
        )}

        <p>
          <textarea
            // Establish note.title via created UseState
            className="btn"
            value={note.textbody}
            onClick={handleExpand}
            name="textbody"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={Expand ? 5 : 1}
            required
          ></textarea>
        </p>
        <button className="hvr-pulse-shrink" onClick={submitButton}>
          <IoAddOutline size={25} />
        </button>
      </form>
    </div>
  );
};

export default Area;
