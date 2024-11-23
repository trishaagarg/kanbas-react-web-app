import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

interface Module {
  id: string;
  name: string;
  description: string;
  course: string;
}

export default function WorkingWithObjects() {
  const [module, setModule] = useState<Module | null>(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [score, setScore] = useState(85);
  const [completed, setCompleted] = useState(false);

  const fetchModule = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/module`);
    const data = await response.json();
    setModule(data);
  };

  const updateModuleName = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/module/name`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
    fetchModule(); // Refresh module data
  };

  const updateModuleDescription = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/module/description`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: newDescription }),
    });
    fetchModule(); // Refresh module data
  };

  const updateScore = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/assignment/score`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score }),
    });
    alert("Score updated!");
  };

  const updateCompleted = async () => {
    await fetch(`${REMOTE_SERVER}/lab5/assignment/completed`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    alert("Completed status updated!");
  };

  return (
    <div>
      <h3>Working with Objects</h3>

      {/* Fetch Module */}
      <button onClick={fetchModule}>Get Module</button>
      {module && (
        <div>
          <p>Module Name: {module.name}</p>
          <p>Module Description: {module.description}</p>
        </div>
      )}

      {/* Update Module Name */}
      <div>
        <input
          type="text"
          placeholder="New Module Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={updateModuleName}>Update Module Name</button>
      </div>

      {/* Update Module Description */}
      <div>
        <input
          type="text"
          placeholder="New Module Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={updateModuleDescription}>
          Update Module Description
        </button>
      </div>

      {/* Update Assignment Properties */}
      <div>
        <input
          type="number"
          placeholder="New Score"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />
        <button onClick={updateScore}>Update Score</button>
      </div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <label>Completed</label>
        <button onClick={updateCompleted}>Update Completed</button>
      </div>
      <hr />
    </div>
  );
}
