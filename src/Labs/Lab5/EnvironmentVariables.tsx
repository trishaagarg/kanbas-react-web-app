import React from "react";

export default function EnvironmentVariables() {
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
  return (
    <div id="environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {REMOTE_SERVER}</p>
      <hr />
    </div>
  );
}