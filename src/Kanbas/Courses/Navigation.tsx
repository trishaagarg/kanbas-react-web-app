import { Link, useParams, useLocation } from 'react-router-dom';

function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  // Extract course ID from the URL
  const { cid } = useParams();
  // Get current path to highlight the active link
  const location = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${cid}/${link}`;
        const isActive = location.pathname === linkPath;

        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item ${isActive ? 'active' : ''} border-0`}
            id={`wd-course-${link.toLowerCase()}-link`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

export default CoursesNavigation;