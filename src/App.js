import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="container">
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </div>
  );
}

export default App;
