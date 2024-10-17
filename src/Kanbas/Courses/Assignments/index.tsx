import AssignmentSearch from "./AssignmentSearch";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { MdEditDocument } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

{/* simply gets an array of assignment objects where the course is the ID in the URL (using filter method), 
    then maps a line item for each assignment in the array (using map method), 
    filling in the title and dates dynamically based on the course. */} 

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter(
        (assignment) => assignment.course === cid
      );

    return (
        <div id="wd-assignments">
            <AssignmentSearch />

            {/* NO JS LOGIC HERE */}
            <ul id="wd-assignments" className="list-group rounded-0 w-100">
                <li className="wd-lesson list-group-item fs-5 bg-header-2">
                    <div className="wd-title p-3 ps-2 bg-header-2 d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <RxTriangleDown className="me-2" />
                        <h3 className="mt-2">ASSIGNMENTS</h3>
                        <span className="ms-auto">
                            <span className="me-2 transparent-curved">
                                40% of Total
                            </span>
                            <FaPlus className="me-2" />
                            <IoEllipsisVertical className="me-2 fs-4" />
                        </span>
                    </div>
                </li>

                {/* map each assignment for this class to a new line item with literals */}
                {assignments.map((assignment) => (
                    <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                        <div className="row">
                            <div className="col-2 pt-4">
                                <BsGripVertical className="me-2 fs-3 float-left" />
                                <MdEditDocument className="me-2 fs-3 float-left" />
                            </div>
                            <div className="col-8">
                                <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="no-link-style">
                                    <h4>{assignment.title}</h4>
                                </a>
                                <span className="text-danger fw-bold">Multiple Modules</span> |
                                <span className="fw-bold"> Not available until</span>
                                <span> {assignment.availableDatePretty} </span> |
                                <br />
                                <span className="fw-bold"> Due </span>
                                <span className="text-muted">{assignment.dueDatePretty} | {assignment.points} Points</span>
                            </div>
                            <div className="col-2 pt-4">
                                <LessonControlButtons /><br />
                            </div>
                        </div>
                    </li>
                ))}   
            </ul>
        </div>
    );
}
