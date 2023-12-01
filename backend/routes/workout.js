const express = require("express");
const { createWorkout,getWorkout,getWorkouts } = require("../controllers/workoutControllers");

const router = express.Router();

//get all workout
router.get("/",getWorkouts)

// get a single workout
router.get("/:id", getWorkout)


// post a workout
router.post("/",createWorkout )


//delete a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a  workouts" });
});

//update a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "update a  workouts" });
});

module.exports = router;
