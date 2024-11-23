import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("10");
  const [b, setB] = useState("5");

  return (
    <div>
      <h3>Path Parameters</h3>
      <input
        className="form-control mb-2"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Value A"
      />
      <input
        className="form-control mb-2"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Value B"
      />
      <a href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`} className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`} className="btn btn-danger">
        Subtract {a} - {b}
      </a>
      <hr />
    </div>
  );
}