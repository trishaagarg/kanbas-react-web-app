import { Link } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import {
  BsGripVertical,
  BsChevronDown,
  BsThreeDotsVertical,
} from "react-icons/bs";  // Added BsFileEarmarkText icon
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { FaRegEdit } from "react-icons/fa";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <br></br> 
      <div className="d-flex align-items-center mb-3 p-3 ps-2 bg-secondary border border-gray rounded">
        <h5 className="mb-0 me-2 d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <BsChevronDown className="me-2" />
          ASSIGNMENTS
        </h5>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-muted me-2 border border-black p-1 rounded">40% of Total</span>
          <button className="btn btn me-2">
            <FaPlus />
          </button>
          <button className="btn btn">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      <ul id="wd-assignments" className="list-group rounded-0">
        {/* Assignment 1 */}
        <li className="wd-assignment list-group-item p-0 mb-0 fs-5 border-top border-gray position-relative">
          <div className="position-absolute top-0 start-0 h-100" style={{ width: "4px", backgroundColor: "green" }}></div>
          <div className="wd-title p-3 ps-2 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaRegEdit className="text-success" />
            <Link
              className="wd-assignment-link ms-2 fw-bold text-primary"
              to="/kanbas/courses/1234/assignments/1"
            >
              A1
            </Link>
            <div className="ms-auto d-flex align-items-center">
              <GreenCheckmark />
              <BsThreeDotsVertical className="ms-2" />
            </div>
          </div>
          <div className="wd-details ps-4 d-flex align-items-center">
            <span className="text-danger">Multiple Modules</span>
            <span className="mx-2">|</span>
            <span className="text-muted">
              Not available until May 6 at 12:00am
            </span>
          </div>
          <div className="ps-4">
            <span className="fw-bold">Due May 13 at 11:59pm | 100 pts</span>
          </div>
        </li>

        {/* Assignment 2 */}
        <li className="wd-assignment list-group-item p-0 mb-0 fs-5 border-top border-gray position-relative">
          <div className="position-absolute top-0 start-0 h-100" style={{ width: "4px", backgroundColor: "green" }}></div>
          <div className="wd-title p-3 ps-2 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaRegEdit className="text-success" />
            <Link
              className="wd-assignment-link ms-2 fw-bold text-primary"
              to="/kanbas/courses/1234/assignments/2"
            >
              A2
            </Link>
            <div className="ms-auto d-flex align-items-center">
              <GreenCheckmark />
              <BsThreeDotsVertical className="ms-2" />
            </div>
          </div>
          <div className="wd-details ps-4 d-flex align-items-center">
            <span className="text-danger">Multiple Modules</span>
            <span className="mx-2">|</span>
            <span className="text-muted">
              Not available until May 13 at 12:00am
            </span>
          </div>
          <div className="ps-4">
            <span className="fw-bold">Due May 20 at 11:59pm | 100 pts</span>
          </div>
        </li>

        {/* Assignment 3 */}
        <li className="wd-assignment list-group-item p-0 mb-0 fs-5 border-top border-gray position-relative">
          <div className="position-absolute top-0 start-0 h-100" style={{ width: "4px", backgroundColor: "green" }}></div>
          <div className="wd-title p-3 ps-2 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaRegEdit className="text-success" />
            <Link
              className="wd-assignment-link ms-2 fw-bold text-primary"
              to="/kanbas/courses/1234/assignments/3"
            >
              A3
            </Link>
            <div className="ms-auto d-flex align-items-center">
              <GreenCheckmark />
              <BsThreeDotsVertical className="ms-2" />
            </div>
          </div>
          <div className="wd-details ps-4 d-flex align-items-center">
            <span className="text-danger">Multiple Modules</span>
            <span className="mx-2">|</span>
            <span className="text-muted">
              Not available until May 20 at 12:00am
            </span>
          </div>
          <div className="ps-4">
            <span className="fw-bold">Due May 27 at 11:59pm | 100 pts</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
