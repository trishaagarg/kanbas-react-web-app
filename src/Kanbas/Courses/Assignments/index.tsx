import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import {
  BsGripVertical,
  BsChevronDown,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { FaRegEdit } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from the URL
  const assignments = db.assignments.filter(
    (assignment: any) => assignment.course === cid
  ); // Filter assignments by course

  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      {/* Assignments Header */}
      <div className="d-flex align-items-center mb-3 p-3 ps-2 bg-secondary border border-gray rounded">
        <h5 className="mb-0 me-2 d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" />
          <BsChevronDown className="me-2" />
          ASSIGNMENTS
        </h5>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-muted me-2">40% of Total</span>
          {/* Plus Button */}
          <button className="btn btn-outline-secondary btn-sm me-2">
            <FaPlus />
          </button>
          {/* Ellipsis Button */}
          <button className="btn btn-outline-secondary btn-sm">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      {/* Assignments List */}
      <ul id="wd-assignments" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid) // Filter assignments by course ID
          .map((assignment: any) => (
            <li
              key={assignment._id}
              className="wd-assignment list-group-item p-0 mb-0 fs-5 border-top border-gray"
            >
              <div className="wd-title p-3 ps-2 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FaRegEdit className="me-2 text-success" />
                <Link
                  className="wd-assignment-link ms-2 fw-bold text-primary"
                  to={`/kanbas/courses/${cid}/assignments/${assignment._id}`}
                >
                  {assignment.name}
                </Link>
                <span className="ms-auto">
                  <GreenCheckmark />
                </span>
                <BsThreeDotsVertical />
              </div>
              <div className="wd-details ps-4">
                <span className="text-danger">Multiple Modules</span>
                <span className="text-muted">
                  {" "}
                  | Not available until{" "}
                  {new Date(assignment.availableFrom).toLocaleString()}
                </span>
                <br />
                <span className="fw-bold">
                  Due {new Date(assignment.dueDate).toLocaleDateString()} at{" "}
                  {new Date(assignment.dueDate).toLocaleTimeString()} |{" "}
                  {assignment.points} pts
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
