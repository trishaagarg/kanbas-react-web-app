import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill me-4">
        <Modules />
      </div>
      <div className="float-end d-none d-xl-block" >
        <CourseStatus />
      </div>
    </div>
  );
}
