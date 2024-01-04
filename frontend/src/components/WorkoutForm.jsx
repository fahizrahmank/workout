import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const nav = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout added", json);
    }
    nav('/')
  };

  return (
    <div>
      <form action="" className="create" onSubmit={handleSubmit}>
        <h3>Add New Workout</h3>

        <label htmlFor="">Exercize Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="">Load (in kg) </label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />

        <label htmlFor="">Reps</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <br />
        <br />
        <button>Add Workout</button>
        {error && <div className="error"> {error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
