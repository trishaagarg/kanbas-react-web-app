import React from "react";
import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import HttpClient from "./HttpClient";

export default function Lab5() {
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
  return (
    <div id="lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithArrays />
      <WorkingWithObjects />
      <HttpClient />
    </div>
  );
}