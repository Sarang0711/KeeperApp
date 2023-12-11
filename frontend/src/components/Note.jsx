import React from "react";
// import {DeleteIcon, Edit} from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


function Note(props) {
  function handleDelClick()  {
    props.onDelete(props.id);
    // console.log(props.id)
  }

  function handleEditClick() {
    // console.log(props.id)
    props.onEdit(props.id);
  }
  return (
    <div className="note">
      <button onClick={handleEditClick}>
      {<EditIcon/>}
      </button>
      <button onClick={handleDelClick}>
      {<DeleteIcon/>}
      </button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
