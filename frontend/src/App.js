import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import { fetch } from "./store/csrf";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Area from "./components/Area";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import "./index.css";
function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // const userNotes = useSelector((state) => state.session.notes);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`/api/note/${sessionUser.id}`);
        // console.log(response.data);
        setNotes(response.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [sessionUser]);

  const addNote = async (newNote) => {
    const res = await fetch("/api/note/", {
      method: "post",
      body: JSON.stringify({
        title: newNote.title,
        textbody: newNote.textbody,
        user_id: sessionUser.id,
      }),
    });

    setNotes((prevValue) => {
      return [...prevValue, res.data];
    });
  };

  const deleteNote = async (id) => {
    const res = await fetch(`/api/note/${id}`, {
      method: "delete",
    });
    const newValue = notes.filter((note) => {
      return note.id !== res.data.id;
    });
    // console.log(newValue);
    setNotes(newValue);
    // console.log(notes);

    // console.log(newValue);
    // setNotes((prevValue) => {
    //   return [
    //     ...prevValue.filter((note) => {
    //       return note.id !== res.data.id;
    //     }),
    //   ];
    // });
  };

  const updateNote = async (note) => {
    //
    const res = await fetch(`/api/note/${note.id}`, {
      method: "put",
      body: JSON.stringify({
        title: note.newTitle,
        textbody: note.newTextBody,
        user_id: sessionUser.id,
      }),
    });
  };

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <Header />
        <Footer />
        <Navigation isLoaded={isLoaded} />
        <Count
          count={
            notes.length === 0
              ? "Inspire yourself to something creative.."
              : `Continue Writing notes. Is 1 enough? keep pushing!`
          }
        />
        <Area onAdd={addNote} />
        {notes.map((note, index) => (
          <Note
            key={index}
            id={note.id}
            title={note.title}
            textbody={note.textbody}
            onDelete={deleteNote}
            onEdit={updateNote}
          />
        ))}
      </div>
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
