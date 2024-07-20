import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';



function App() {

  const [noteList, addToList] = useState([]); 

  // const URL = 'http://localhost:5000/';
  // backend url deployed on render
  const URL = "https://keeperapp-laqw.onrender.com:5000/";

  useEffect(() => {
    getList();
  });


  function getList() {
    axios.get(URL + 'notes')
    .then((res) => {
      addToList(res.data);
      // console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function addNote(note) {
    addToList((prevValue) => {
      return [...prevValue, note];
    })

  }

  function deleteNote(id) {
    // console.log(id)
    axios.delete(URL + `notes/delete/${id}`).then(() => {
      addToList((prevValue) => {
        return prevValue.filter((note) => {
          return note._id !== id;
      });
    });
      
    })
  }

  function editNote(id) {
    console.log(id)
    
    axios.patch(URL + `notes/update/${id}`).then(() => {
    getList();
      
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote} URL = {URL}/>
      { noteList.map((note, index) => 
        { 
          return( 
                  <Note 
                    key={index} 
                    id = {note._id}
                    title={note.title} 
                    content={note.content}
                    onDelete = {deleteNote}
                    onEdit = {editNote}
                  />
                )
        }
      )}
      <Footer />
    </div>
  );
}

export default App;
