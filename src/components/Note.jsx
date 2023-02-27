import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleDelClick()  {
    props.isClicked(props.id);
  }
  return (
    <div className="note">
      <button onClick={handleDelClick}>
        x
      </button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
