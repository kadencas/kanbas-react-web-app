import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { Link } from "react-router-dom";

{/* find the assignment based on aid in URL (using find function on the assignments in db),
    then dynamically update all of the placeholders with data from the assignment. */}


export default function AssignmentEditor() {
    const { aid } = useParams();
    const { cid } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === aid
      );

      if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" defaultValue={assignment.title}/>
            </div>
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control">{assignment.description}
                </textarea>
            </div>

            {/* ROW - 2 coolumns, points/value, points text on right */}
            <div className="row mb-3 align-items-center">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-8">
                    <input id="wd-points" className="form-control" defaultValue={assignment.points} />
                </div>
            </div>

            {/* ROW - 2 coolumns, assignment group/assignments, assignment group on right */}
            <div className="row mb-3 align-items-center">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-8">
                    <select id="wd-group" className="form-control">
                        <option value="option1">ASSIGNMENTS</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>

            {/* ROW - 2 coolumns, display grade as/percentage, display grade as on right */}
            <div className="row mb-3 align-items-center">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                </div>
                <div className="col-md-8">
                    <select id="wd-display-grade-as" className="form-control">
                        <option value="option1">PERCENTAGE</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
            </div>

            {/* ROW - 2 coolumns, submission type/card, submission type on right, card contains more forms */}
            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row mb-3 align-items-center">
                                <select id="wd-submission-type" className="form-control">
                                    <option value="option1">Online</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="row mb-3 align-items-center">
                                <label className="form-label mb-3">Online Entry Options</label>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                                    <label htmlFor="wd-text-entry" className="form-check-label mb-3">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-website-url" className="form-check-input" />
                                    <label htmlFor="wd-website-url" className="form-check-label mb-3">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                                    <label htmlFor="wd-media-recordings" className="form-check-label mb-3">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                                    <label htmlFor="wd-student-annotation" className="form-check-label mb-3">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                                    <label htmlFor="wd-file-upload" className="form-check-label mb-3">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ROW - 2 coolumns, assign/card, assign on right, card contains more forms */}
            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label className="form-label">Assign</label>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                            </div>
                            <div className="row mb-2 align-items-center">
                                <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
                            </div>
                            <div className="row align-items-center">
                                <label htmlFor="wd-due-date" className="form-label">Due</label>
                            </div>
                            <div className="row mb-2 align-items-center">
                                <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue={assignment.dueDate} />
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                    <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue={assignment.availableDate} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                                    <input type="datetime-local" id="wd-available-until" className="form-control" defaultValue={assignment.availableUntil} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`}  id="wd-cancel-linlk" className="btn btn-secondary me-2">Cancel</Link>
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-save-button" className="btn btn-danger">Save</Link>
            </div>
        </div>
    );
}
