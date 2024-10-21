import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const [assignment, setAssignment] = useState({
    name: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
  });

  // Fetch assignment from the database when the component loads
  useEffect(() => {
    const fetchedAssignment = db.assignments.find(
      (a: any) => a.course === cid && a._id === aid
    );
    if (fetchedAssignment) {
      setAssignment({
        name: fetchedAssignment.name,
        description: fetchedAssignment.description || "",
        points: fetchedAssignment.points,
        dueDate: fetchedAssignment.dueDate,
        availableFrom: fetchedAssignment.availableFrom || "",
      });
    }
  }, [cid, aid]);

  return (
    <div className="container mt-4">
      <h2>Edit Assignment</h2>
      <form>
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="assignmentName" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="assignmentName"
            value={assignment.name}
            onChange={(e) =>
              setAssignment({ ...assignment, name: e.target.value })
            }
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={5}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          ></textarea>
        </div>

        {/* Points */}
        <div className="mb-3">
          <label htmlFor="points" className="form-label">
            Points
          </label>
          <input
            type="number"
            className="form-control"
            id="points"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </div>

        {/* Assignment Group */}
        <div className="mb-3">
          <label htmlFor="assignmentGroup" className="form-label">
            Assignment Group
          </label>
          <select
            className="form-control"
            id="assignmentGroup"
            defaultValue="Assignments"
          >
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
          </select>
        </div>

        {/* Display Grade As */}
        <div className="mb-3">
          <label htmlFor="displayGradeAs" className="form-label">
            Display Grade as
          </label>
          <select
            className="form-control"
            id="displayGradeAs"
            defaultValue="Percentage"
          >
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
          </select>
        </div>

        {/* Submission Type Section */}
        <div className="row mb-3 align-items-start">
          <div className="col-md-4">
            <label htmlFor="submissionType" className="form-label">
              Submission Type
            </label>
          </div>
          <div className="col-md-8">
            <div className="p-3 border">
              <select
                className="form-control"
                id="submissionType"
                defaultValue="Online"
              >
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </select>

              <div className="mt-3">
                <label className="form-label">Online Entry Options</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="textEntry"
                  />
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="websiteUrl"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="websiteUrl">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mediaRecordings"
                  />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fileUploads"
                  />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assign Section */}
        <div className="row mb-3 align-items-start">
          <div className="col-md-4">
            <label htmlFor="assignTo" className="form-label">
              Assign
            </label>
          </div>
          <div className="col-md-8">
            <div className="p-3 border">
              <label htmlFor="assignTo" className="form-label">
                Assign To
              </label>
              <input
                type="text"
                className="form-control"
                id="assignTo"
                defaultValue="Everyone"
                readOnly
              />

              {/* Due Date */}
              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">
                  Due Date
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="dueDate"
                  value={assignment.dueDate.slice(0, 16)} // Adjusting the date format for input
                  onChange={(e) =>
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  }
                />
              </div>

              {/* Available From */}
              <div className="mb-3">
                <label htmlFor="availableFrom" className="form-label">
                  Available From
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="availableFrom"
                  value={assignment.availableFrom.slice(0, 16)}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableFrom: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Link
            to={`/kanbas/courses/${cid}/assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            to={`/kanbas/courses/${cid}/assignments`}
            className="btn btn-danger"
          >
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}
