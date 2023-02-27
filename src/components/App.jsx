import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, addToList] = useState([]); 

  function addNote(note) {
    addToList((prevValue) => {
      return [...prevValue, note];
    })
    
  }

  function deleteNote(id) {
    addToList((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
    })
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote}/>
      { noteList.map((note, index) => 
        { 
          return( 
                <Note 
                  key={index} 
                  id = {index}
                  title={note.title} 
                  content={note.content}
                  isClicked = {deleteNote}
                />
                )
        }
      )}
      <Footer />
    </div>
  );
}

export default App;
