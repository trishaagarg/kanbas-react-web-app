import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { BiImport, BiDownload } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineRollback } from "react-icons/ai";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaTrashAlt className="me-2 fs-5" /> Delete Course
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineRollback className="me-2 fs-5" /> Reset Course
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiDownload className="me-2 fs-5" /> Download Course Content
      </button>
    </div>
);}
