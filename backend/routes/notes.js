const Note = require("../models/noteModel");
const router = require("express").Router();

// Show Notes
router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.statusCode(400).json("Error: " + err));
});

// Add Notes
router.route("/add").post((req, res) => {
  const newTitle = req.body.title;
  const newContent = req.body.content;

  const newNote = new Note({
    title: newTitle,
    content: newContent,
  });

  newNote
    .save()
    .then(() => res.json("Note Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update Notes
router.route("/update/:id").patch((req, res) => {
  console.log(req.params.id)

  Note.findById(req.params.id)
    .then((note) => {
      (note.title = req.body.title),
        (note.content = req.body.content),
        note
          .save()
          .then(() => {
            res.json("Note Updated");
          })
          .catch((err) => {
            res.status(400).json("Error: " + err);
          });
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Delete Notes
router.route("/delete/:id").delete((req, res) => {
  console.log(req.params.id)
  Note.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Note Deleted");
    })
    .catch((err) => {
        res.status(400).json("Error: " + err)
    });
});

module.exports = router;
