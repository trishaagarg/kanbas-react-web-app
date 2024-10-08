import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course 1: ReactJS */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack Software Developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2: Angular */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2345/Home"
              >
                <img src="/images/angular.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2345 Angular
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Front-End Developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3: Python */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3456/Home"
              >
                <img src="/images/python.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3456 Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science and AI
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4: Machine Learning */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4567/Home"
              >
                <img
                  src="/images/machine_learning.jpg"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4567 Machine Learning
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Advanced AI Techniques
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5: Cloud Computing */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5678/Home"
              >
                <img
                  src="/images/cloud_computing.jpg"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5678 Cloud Computing
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Scalable Systems Architecture
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
