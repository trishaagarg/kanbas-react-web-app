import React from 'react';

export default function AssignmentEditor() {
    return (
        <div className="container mt-4">
            <h2>Edit Assignment</h2>
            <form>
                
                {/* Assignment Name */}
                <div className="mb-3">
                    <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="assignmentName"
                        defaultValue="A1"
                    />
                </div>

                {/* Description */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows={5}
                        placeholder="The assignment is available online. Submit a link..."
                    ></textarea>
                </div>
                
                {/* Points, Assignment Group, Display Grade */}
                <div className="mb-3">
                    <label htmlFor="points" className="form-label">Points</label>
                    <input type="number" className="form-control" id="points" defaultValue={100} />
                </div>

                <div className="mb-3">
                    <label htmlFor="assignmentGroup" className="form-label">Assignment Group</label>
                    <select className="form-control" id="assignmentGroup" defaultValue="Assignments">
                        <option>Assignments</option>
                        <option>Quizzes</option>
                        <option>Exams</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="displayGradeAs" className="form-label">Display Grade as</label>
                    <select className="form-control" id="displayGradeAs" defaultValue="Percentage">
                        <option>Percentage</option>
                        <option>Points</option>
                        <option>Complete/Incomplete</option>
                    </select>
                </div>

                {/* Submission Type Section */}
                <div className="row mb-3 align-items-start">
                    <div className="col-md-4">
                        <label htmlFor="submissionType" className="form-label">Submission Type</label>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 border">
                            <select className="form-control" id="submissionType" defaultValue="Online">
                                <option>Online</option>
                                <option>On Paper</option>
                                <option>No Submission</option>
                            </select>

                            <div className="mt-3">
                                <label className="form-label">Online Entry Options</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="textEntry" />
                                    <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="websiteUrl" defaultChecked />
                                    <label className="form-check-label" htmlFor="websiteUrl">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                                    <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="fileUploads" />
                                    <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assign Section */}
                <div className="row mb-3 align-items-start">
                    <div className="col-md-4">
                        <label htmlFor="assignTo" className="form-label">Assign</label>
                    </div>
                    <div className="col-md-8">
                        <div className="p-3 border">
                        <label htmlFor="assignTo" className="form-label">Assign To</label>
                            <input type="text" className="form-control" id="assignTo" defaultValue="Everyone" readOnly />

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label htmlFor="availableFrom" className="form-label">Available from</label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        id="availableFrom"
                                        defaultValue="2024-05-06T00:00"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="until" className="form-label">Until</label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        id="until"
                                        defaultValue="2024-05-13T23:59"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-secondary me-2">Cancel</button>
                    <button type="submit" className="btn btn-danger">Save</button>
                </div>
            </form>
        </div>
    );
}
