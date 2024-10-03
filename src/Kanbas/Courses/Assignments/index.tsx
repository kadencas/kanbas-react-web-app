import AssignmentSearch from "./AssignmentSearch";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import { MdEditDocument } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentSearch />
            <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0 w-100">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <RxTriangleDown className="me-2" />
                        <span>ASSIGNMENTS</span>
                        <span className="ms-auto">
                            <span className="me-2">
                                40% of Total
                            </span>
                            <FaPlus className="me-2" />
                            <IoEllipsisVertical className="me-2 fs-4" />
                        </span>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="row">
                                <div className="col-2 pt-4 ">
                                    <BsGripVertical className="me-2 fs-3 float-left" />
                                    <MdEditDocument className="me-2 float-left" />
                                </div>
                                <div className="col-8">
                                    <a href="#/Kanbas/Courses/1234/Assignments/123">
                                        <h4>A1</h4>
                                    </a>
                                    Multiple Modules | Not available until May 6 at 12:00 am |<br />
                                    Due May 13 at 11:59pm | 100 pts
                                </div>
                                <div className="col-2 pt-4 ">
                                    <LessonControlButtons /><br />
                                </div>
                            </div>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="row">
                                <div className="col-2 pt-4 ">
                                    <BsGripVertical className="me-2 fs-3 float-left" />
                                    <MdEditDocument className="me-2 float-left" />
                                </div>
                                <div className="col-8">
                                <a href="#/Kanbas/Courses/1234/Assignments/123">
                                        <h4>A2</h4>
                                    </a>
                                    Multiple Modules | Not available until May 6 at 12:00 am |<br />
                                    Due May 13 at 11:59pm | 100 pts
                                </div>
                                <div className="col-2 pt-4 ">
                                    <LessonControlButtons /><br />
                                </div>
                            </div>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div className="row">
                                <div className="col-2 pt-4  ">
                                    <BsGripVertical className="me-2 fs-3 float-left" />
                                    <MdEditDocument className="me-2 float-left" />
                                </div>
                                <div className="col-8">
                                <a href="#/Kanbas/Courses/1234/Assignments/123">
                                        <h4>A3</h4>
                                    </a>
                                    Multiple Modules | Not available until May 6 at 12:00 am |<br />
                                    Due May 13 at 11:59pm | 100 pts
                                </div>
                                <div className="col-2 pt-4 ">
                                    <LessonControlButtons /><br />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
