import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButton from "./ModuleControlButton";
import ModulesControls from "./ModulesControls";
export default function Modules() {
    return (
        <div>
            <div className="d-flex flex-column align-items-stretch w-100">
            <div className="d-flex justify-content-end mb-4">
                <ModulesControls />
            </div>
            <br /><br /><br /><br />
                <ul id="wd-modules" className="list-group rounded-0 w-100">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            Week 1 <ModuleControlButton />
                        </div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                LEARNING OBJECTIVES <LessonControlButtons />
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Introduction to the course <LessonControlButtons /></li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                Learn what is Web Development <LessonControlButtons /></li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                LESSON 1 <LessonControlButtons /></li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                LESSON 2 <LessonControlButtons /></li>
                        </ul>
                    </li>
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            Week 2 <ModuleControlButton /></div>
                        <ul className="wd-lessons list-group rounded-0">
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                LEARNING OBJECTIVES <LessonControlButtons /></li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                LESSON 1 <LessonControlButtons /></li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />
                                LESSON 2 <LessonControlButtons /></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
