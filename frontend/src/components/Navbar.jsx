import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
          <div>
            <Link to="/addNewWorkout">
              {" "}
              <button>
                <h4> Add New Workout</h4>
              </button>{" "}
            </Link>
          </div>
        </Link>
        <button onClick={() => nav("/")}>
          {" "}
          <h3>Home</h3>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
