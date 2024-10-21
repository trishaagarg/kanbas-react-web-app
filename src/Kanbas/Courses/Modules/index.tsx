import { useParams } from 'react-router'; 
import * as db from "../../Database";
import ModuleControlButtons from './ModuleControlButtons';  
import LessonControlButtons from './LessonControlButtons';
import ModulesControls from './ModulesControls'; 
import { BsGripVertical } from 'react-icons/bs';  

export default function Modules() {
  const { cid } = useParams(); 
  const modules = db.modules;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-start">
        <ModulesControls />
      </div>
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid) // Filter modules based on the course ID
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              {/* Module Title */}
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" /> 
                  <span className="text-start">{module.name}</span>  
                </div>
                <ModuleControlButtons />
              </div>

              {/* Lessons under the module */}
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" /> 
                        <span className="text-start">{lesson.name}</span>  
                      </div>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}