import { FaSearch, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="d-flex align-items-center justify-content-between mb-3">
      <div className="input-group" style={{ maxWidth: "250px" }}>
        <span className="input-group-text bg-white border-end-0">
          <FaSearch className="text-muted" />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search..."
          aria-label="Search assignments"
          aria-describedby="button-addon2"
        />
      </div>

      <div>
        <button id="wd-add-group-btn" className="btn btn-outline-secondary me-2">
          <FaPlus className="me-2" />
          Group
        </button>
        <button id="wd-add-assignment-btn" className="btn btn-danger">
          <FaPlus className="me-2" />
          Assignment
        </button>
      </div>
    </div>
  );
}
