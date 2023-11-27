const express = require("express");

const router = express.Router();

//get all workout
router.get("/", (req, res) => {
  res.json({ msg: "get all workouts" });
});

// get a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "get single workout" });
});

// post a workout
router.post("/", (req, res) => {
  res.json({ msg: "post a new workouts" });
});

//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a  workouts" });
});

//update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a  workouts" });
});

module.exports = router;
