import { IoEllipsisVertical } from 'react-icons/io5';
import { FaTrash } from "react-icons/fa";
import { FaPlus } from 'react-icons/fa'; 
import GreenCheckmark from './GreenCheckmark'; 
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons(
{ moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }) {
  return (
    <div className="float-end">
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
      <GreenCheckmark />
      <FaPlus className="fs-1" />
      <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
);}
