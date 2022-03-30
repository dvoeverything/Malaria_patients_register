import React from "react";
import { db } from "./firebase";
import { collection, addDoc } from "./firebase/firestore";
import "./profile.css";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [symptoms, setSymptoms] = React.useState("");
  const [location, setLocation] = React.useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && surname !== "" && age !== "" && gender !== "" && symptoms !== "" && location !== "") {
      await addDoc(collection(db, "Patients"), {
        name: title, Surname: surname, age: age, gender: gender, Symptoms: symptoms, Location: location,

      });
      setTitle("");
      setSurname("");
      setAge("");
      setGender("");
      setSymptoms("");
      setLocation("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter name of New Malaria Patient..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter surname of Patient..."
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter the age of Patient..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter gender Patient..."
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="How severe are the symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter the Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}
