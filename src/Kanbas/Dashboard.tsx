import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment } from "./enrollmentReducer";
import * as userClient from "./Account/client";


export default function Dashboard(
  /* Paramaters passed into the dashboard component */
  { courses, allCourses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrollInCourse, unenrollInCourse}:
    {
      /* Specify the type of each paramater passed into dashboard */
      courses: any[];
      allCourses: any[];
      course: any;
      setCourse: (course: any) => void;
      addNewCourse: () => void;
      deleteCourse: (course: any) => void;
      updateCourse: () => void;
      enrollInCourse: (courseId: any) => void;
      unenrollInCourse: (courseId: any) => void;
    }) {
  /* make variables currentUser and enrollments from the Redux store, allow dispatch for actions */
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();

  /* local state variable to toggleEnrollments true/false and function to change */
  const [toggleEnrollments, setToggleEnrollments] = useState<boolean>(true);
  function handleToggle() {
    setToggleEnrollments(!toggleEnrollments);
  }

  /* the courses we are displaying */
  const coursesToDisplay = toggleEnrollments ? courses : allCourses;

  const handleEnroll = async (courseId: any) => {
    enrollInCourse(courseId)
  };

  const handleUnenroll = async (courseId: any) => {
    console.log("unenroll user from course:", courseId)
    unenrollInCourse(courseId)
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* FACULTY NEW COURSE/UPDATE COURSE SECTION*/}
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <hr />
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      {/* PUBLISHED/ENROLLED COURSES HEADER */}
      <h2 id="wd-dashboard-published">
        Published Courses ({allCourses.length})
        Enrolled Courses ({courses.length})
      </h2>{" "}
      <hr />

      {/* ENROLLMENTS BUTTON THAT TOGGLES ENROLLMENTS */}
      {currentUser.role === "STUDENT" && (
        <button onClick={handleToggle} className="btn btn-primary float-end">
          Enrollments
        </button>
      )}

      {/* THE ACTUAL DASHBOARD */}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {coursesToDisplay.map((course) => {
            const isEnrolled = courses.some((enrolledCourse) => enrolledCourse._id === course._id);
            return (
              <div
                key={course._id}
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">

                  <img
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <button className="btn btn-primary">Go</button>
                    </Link>

                    {/* STUDENT EDIT BUTTONS */}
                    {currentUser.role === "STUDENT" && (
                      <>
                        {isEnrolled ? (
                          <button
                            className="btn btn-danger float-end"
                            id="wd-unenroll-course-click"
                            onClick={() => handleUnenroll(course._id)}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success float-end"
                            id="wd-enroll-course-click"
                            onClick={() => handleEnroll(course._id)}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}

                    {/* FACULTY EDIT BUTTONS */}
                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div >
    </div >
  );
}