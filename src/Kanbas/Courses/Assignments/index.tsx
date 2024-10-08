// src/Kanbas/Courses/Assignments/Assignments.tsx
import { Link } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical, BsChevronDown, BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import GreenCheckmark from "./GreenCheckmark";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      {/* Assignments Header with Gray Background and Buttons, with Grey Border */}
      <div className="d-flex align-items-center mb-3 p-3 ps-2 bg-secondary border border-gray rounded">
        <h5 className="mb-0 me-2 d-flex align-items-center">
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

      {/* Assignments List - No space between assignments */}
      <ul id="wd-assignments" className="list-group rounded-0">
        {/* Assignment 1 */}
        <li className="wd-assignment list-group-item p-0 mb-0 fs-5 border-top border-gray">
          <div className="wd-title p-3 ps-2 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link className="wd-assignment-link ms-2 fw-bold text-primary" to="/kanbas/courses/1234/assignments/1">
              A1
            </Link>
            <span className="ms-auto">100 pts</span>
            <GreenCheckmark />
          </div>
          <div className="wd-details ps-4">
            <span className="text-danger">Multiple Modules</span>
            <br />
            <span className="text-muted">Not available until May 6 at 12:00am</span>
            <br />
            <span className="fw-bold">Due May 13 at 11:59pm</span>
          </div>
        </li>

        {/* Assignment 2 */}
        <li className="wd-assignment list-group-item p-0 mb-0 fs-5 border-top border-gray">
          <div className="wd-title p-3 ps-2 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link className="wd-assignment-link ms-2 fw-bold text-primary" to="/kanbas/courses/1234/assignments/2">
              A2
            </Link>
            <span className="ms-auto">100 pts</span>
            <GreenCheckmark />
          </div>
          <div className="wd-details ps-4">
            <span className="text-danger">Multiple Modules</span>
            <br />
            <span className="text-muted">Not available until May 13 at 12:00am</span>
            <br />
            <span className="fw-bold">Due May 20 at 11:59pm</span>
          </div>
        </li>

        {/* Assignment 3 */}
        <li className="wd-assignment list-group-item p-0 mb-0 fs-5 border-top border-gray">
          <div className="wd-title p-3 ps-2 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link className="wd-assignment-link ms-2 fw-bold text-primary" to="/kanbas/courses/1234/assignments/3">
              A3
            </Link>
            <span className="ms-auto">100 pts</span>
            <GreenCheckmark />
          </div>
          <div className="wd-details ps-4">
            <span className="text-danger">Multiple Modules</span>
            <br />
            <span className="text-muted">Not available until May 20 at 12:00am</span>
            <br />
            <span className="fw-bold">Due May 27 at 11:59pm</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
