import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      {/* Checkmark */}
      <GreenCheckmark />
      {/* Plus Button */}
      <FaPlus className="ms-2" />
      {/* Ellipsis */}
      <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
  );
}
