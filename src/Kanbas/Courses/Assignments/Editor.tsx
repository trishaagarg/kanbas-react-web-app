import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer"; // Import Redux actions
import * as db from "../../Database";

// Define the shape of an Assignment
interface Assignment {
  _id: string;
  name: string;
  course: string;
  description: string;
  availableFrom: string;
  dueDate: string;
  status: string;
  points: number;
}

// Define the shape of the Redux state for assignmentsReducer
interface RootState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check if editing an existing assignment
  const existingAssignment = useSelector((state: RootState) =>
    state.assignmentsReducer.assignments.find((a: Assignment) => a._id === aid)
  );

  // Initialize assignment state
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      name: "",
      description: "",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: cid,
    }
  );

  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  // Handle Save
  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/kanbas/courses/${cid}/assignments`);
  };

  return (
    <div className="container mt-4">
      <h2>{existingAssignment ? "Edit Assignment" : "New Assignment"}</h2>
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
                  value={assignment.dueDate.slice(0, 16)}
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
          <button type="button" onClick={handleSave} className="btn btn-danger">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}