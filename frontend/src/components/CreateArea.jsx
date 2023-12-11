import React, {useState} from "react";
import axios from "axios";

function CreateArea(props) {
  const {URL, onAdd} = props;
  const [note, createNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    // console.log(name);
    // console.log(value);
    createNote((prevValue) => {
      return {
        ...prevValue,
        [name] : value        // *name is written into [] because key is already defined and we are using that predefined key if we write only name: value then it will consider it as new key
      }
    });
  }
  
  function handleSubmit(event) {
    if(note.title.length === 0 || note.content.length === 0) {
      return window.alert("Please Enter Title & Description");
    }
    event.preventDefault();
 
    axios.post(URL + "notes/add", note).then(() => {
      onAdd(note);
      createNote({
        title: "",
        content: "",
      });
    })

  }
  
  return (
    <div>
      <form className="create-note" >
        <input name="title" placeholder="Title"  value = {note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value = {note.content} onChange={handleChange}/>
        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
