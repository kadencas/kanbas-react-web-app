import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
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
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/angularLogo.jpg" width={200} />
            <div>
              <h5>
                 CS6174 Angular
              </h5>
              <p className="wd-dashboard-course-title">
                Angular
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/cLogo.jpg" width={200} />
            <div>
              <h5>
                 CS7164 C
              </h5>
              <p className="wd-dashboard-course-title">
                Programming in C
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/discreteMath.jpg" width={200} />
            <div>
              <h5>
                 CS8174 Discrete Math
              </h5>
              <p className="wd-dashboard-course-title">
                Discrete Math
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/javaLogo.jpg" width={200} />
            <div>
              <h5>
                 CS1648 Java
              </h5>
              <p className="wd-dashboard-course-title">
                OOD Java
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/jsLogo.jpg" width={200} />
            <div>
              <h5>
                 CS7165 JavaScript
              </h5>
              <p className="wd-dashboard-course-title">
                JavaScript
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/pythonLogo.jpg" width={200} />
            <div>
              <h5>
                 CS1874 Python
              </h5>
              <p className="wd-dashboard-course-title">
                Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/sqlLogo.jpg" width={200} />
            <div>
              <h5>
                 CS1746 SQL
              </h5>
              <p className="wd-dashboard-course-title">
                SQL
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
