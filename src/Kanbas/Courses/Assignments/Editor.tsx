export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
            </div>
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control">
                    The assignment is available online.
                </textarea>
            </div>
            <div className="row mb-3 align-items-center">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-8">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>
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

            <div className="row mb-3">
                <div className="col-md-4 text-end">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row mb-3 align-items-center">

                                <div className="col-md-8">
                                    <select id="wd-submission-type" className="form-control">
                                        <option value="option1">Online</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <label className="form-label mb-3">Online Entry Options</label>
                            <div className="form-check">
                                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-website-url" className="form-check-input" />
                                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                <input id="wd-assign-to" className="form-control" value="Everyone" />
                            </div>
                            <div className="row align-items-center">
                                <label htmlFor="wd-due-date" className="form-label">Due</label>
                            </div>
                            <div className="row mb-2 align-items-center">
                                <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
                            </div>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                                    <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T12:00" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                                    <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-05-20T12:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button id="wd-cancel-button" className="btn btn-secondary me-2">Cancel</button>
                <button id="wd-save-button" className="btn btn-primary">Save</button>
            </div>
        </div>
    );
}
