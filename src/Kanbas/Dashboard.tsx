import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button> <br /><br />
            </div>
          </Link>
        </div>

<div className="wd-dashboard-course">
  <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1236/Home">
    <img src="/images/angular.jpg" width={200} />
    <div>
      <h5>CS1236 Angular</h5>
      <p className="wd-dashboard-course-title">Modern Web Development</p>
      <button>Go</button> <br /><br />
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1237/Home">
    <img src="/images/nodejs.jpg" width={200} />
    <div>
      <h5>CS1237 Node.js</h5>
      <p className="wd-dashboard-course-title">Backend Development</p>
      <button>Go</button> <br /><br />
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1235/Home">
    <img src="/images/vuejs.jpg" width={200} />
    <div>
      <h5>CS1235 Vue JS</h5>
      <p className="wd-dashboard-course-title">Front End Framework</p>
      <button>Go</button> <br /><br />
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1238/Home">
    <img src="/images/python.jpg" width={200} />
    <div>
      <h5>CS1238 Python</h5>
      <p className="wd-dashboard-course-title">Data Science and AI</p>
      <button>Go</button> <br /><br />
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1239/Home">
    <img src="/images/machine_learning.jpg" width={200} />
    <div>
      <h5>CS1239 Machine Learning</h5>
      <p className="wd-dashboard-course-title">AI & Machine Learning</p>
      <button>Go</button> <br /><br />
    </div>
  </Link>
</div>

<div className="wd-dashboard-course">
  <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1240/Home">
    <img src="/images/cloud_computing.jpg" width={200} />
    <div>
      <h5>CS1240 Cloud Computing</h5>
      <p className="wd-dashboard-course-title">Cloud Platforms</p>
      <button>Go</button> <br /><br />
    </div>
  </Link>
</div>
        
      </div>
    </div>
  );
}
