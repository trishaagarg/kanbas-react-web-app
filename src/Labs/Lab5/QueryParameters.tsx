import React from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function QueryParameters() {
  return (
    <div>
      <h3>Query Parameters</h3>
      <ul>
        <li>
          <a href={`${REMOTE_SERVER}/lab5/calculator?a=10&b=5&operation=add`}>
            Add 10 + 5
          </a>
        </li>
        <li>
          <a href={`${REMOTE_SERVER}/lab5/calculator?a=10&b=5&operation=subtract`}>
            Subtract 10 - 5
          </a>
        </li>
        <li>
          <a href={`${REMOTE_SERVER}/lab5/calculator?a=10&b=5&operation=multiply`}>
            Multiply 10 * 5
          </a>
        </li>
        <li>
          <a href={`${REMOTE_SERVER}/lab5/calculator?a=10&b=5&operation=divide`}>
            Divide 10 / 5
          </a>
        </li>
      </ul>
    </div>
  );
}