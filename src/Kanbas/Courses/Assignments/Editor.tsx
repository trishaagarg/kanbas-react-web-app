import React from 'react';

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        <td><h3>Assignment Name</h3><br /></td>
                    </tr>
                    <tr>
                        <td>
                            <input id="wd-name" style={{ width: '100%' }} defaultValue="A1 - ENV + HTML" /><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea id="wd-textarea" style={{ width: '200%' }} rows={10} defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section; Links to each of the lab assignments; Link to the Kanbas application; Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page." /><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" type="number" defaultValue={100} /><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option>ASSIGNMENTS</option>
                                <option>QUIZZES</option>
                                <option>EXAMS</option>
                            </select><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            <label htmlFor="wd-grade-display">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-grade-display">
                                <option>Percentage</option>
                                <option>Points</option>
                                <option>Letter</option>
                            </select><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type">
                                <option>Online</option>
                                <option>In Person</option>
                            </select><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            Online Entry Options<br /><br />
                        </td>
                        <td>
                            <label><input type="checkbox" name="entry" value="Text Entry" /> Text Entry</label><br />
                            <label><input type="checkbox" name="entry" value="Website URL" /> Website URL</label><br />
                            <label><input type="checkbox" name="entry" value="Media Recordings" /> Media Recordings</label><br />
                            <label><input type="checkbox" name="entry" value="Student Annotation" /> Student Annotation</label><br />
                            <label><input type="checkbox" name="entry" value="File Uploads" /> File Uploads</label><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            <label htmlFor="wd-assign">Assign To</label><br /><br />
                        </td>
                        <td>
                            <input id="wd-assign" defaultValue="Everyone" /><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                            <label htmlFor="wd-due-date">Due Date</label><br /><br />
                        </td>
                        <td>
                            <input id="wd-due-date" type="date" defaultValue="2024-05-13" /><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'left' }}>
                            <label htmlFor="wd-available-from">Available from</label><br />
                            <input id="wd-available-from" type="date" defaultValue="2024-05-06" /><br /><br />
                        </td>
                        <td style={{ textAlign: 'left' }}>
                            <label htmlFor="wd-available-until">Until</label><br />
                            <input id="wd-available-until" type="date" defaultValue="2024-05-20" /><br /><br />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ textAlign: 'right' }}>
                            <button>Cancel</button>
                            <button>Save</button><br /><br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}