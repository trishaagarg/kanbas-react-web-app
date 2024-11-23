import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import ModulesControls from './ModulesControls';
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";



interface Module {
  _id: string;
  name: string;
  course: string;
  lessons: any[];
  editing?: boolean;
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState<string>("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const handleAddModule = () => {
    if (cid) {
      dispatch(addModule({ name: moduleName, course: cid }));
      setModuleName("");
    }
  };

  const handleUpdateModule = (module: Module, name: string) => {
    dispatch(updateModule({ ...module, name }));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };


  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-start">
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={handleAddModule}
        />
      </div>
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: Module) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing ? (
                    <span>{module.name}</span>
                  ) : (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) => handleUpdateModule(module, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                </div>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}