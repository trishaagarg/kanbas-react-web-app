import { IoEllipsisVertical } from 'react-icons/io5'; 
import GreenCheckmark from './GreenCheckmark';  

export default function LessonControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      {/* Green checkmark for lesson status */}
      <GreenCheckmark />
      {/* Ellipsis icon for more options */}
      <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
  );
}