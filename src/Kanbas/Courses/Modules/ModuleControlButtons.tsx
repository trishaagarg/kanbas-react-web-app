import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa'; 
import GreenCheckmark from './GreenCheckmark'; 

export default function ModuleControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      {/* Green checkmark for module status */}
      <GreenCheckmark />
      {/* Plus icon for adding lessons */}
      <FaPlus className="ms-2" />
      {/* Ellipsis icon for more options */}
      <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
  );
}