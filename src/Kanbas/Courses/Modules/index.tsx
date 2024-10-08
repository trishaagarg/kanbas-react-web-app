import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div className="container mt-4">
      <ModulesControls />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {/* Module 1: Week 1 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <LessonControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {/* Lesson 1: Learning Objectives */}
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            {/* Lesson 2: Introduction to the course */}
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
          </ul>
        </li>

        {/* Module 2: Week 2 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              Week 2
            </div>
            <LessonControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {/* Lesson 1: Learning Objectives */}
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
