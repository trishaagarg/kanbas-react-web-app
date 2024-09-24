
export default function Buttons() {
    return(
        <div>
            <h5 id="wd-buttons">Buttons</h5>
            <button id="wd-all-good" onClick={() => alert("Life is Good!")}>
                    Hello World!
                </button>

                <h5>File Upload</h5>
                <input id="wd-upload" type="file" />

                <h5>Radio buttons</h5>
                <label>Favorite movie genre:</label><br />
                <input type="radio" name="radio-genre" id="wd-radio-comedy" /><label htmlFor="wd-radio-comedy">Comedy</label><br />
                <input type="radio" name="radio-genre" id="wd-radio-drama" /><label htmlFor="wd-radio-drama">Drama</label><br />
                <input type="radio" name="radio-genre" id="wd-radio-scifi" /><label htmlFor="wd-radio-scifi">Science Fiction</label><br />
                <input type="radio" name="radio-genre" id="wd-radio-fantasy" /><label htmlFor="wd-radio-fantasy">Fantasy</label>

                <h5>Checkboxes</h5>
                <label>Favorite movie genre:</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" /><label htmlFor="wd-chkbox-comedy">Comedy</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-drama" /><label htmlFor="wd-chkbox-drama">Drama</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" /><label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />
                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" /><label htmlFor="wd-chkbox-fantasy">Fantasy</label>

                <h5>Dropdowns</h5>
                <label htmlFor="wd-select-one-genre">Favorite movie genre:</label><br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>
            </div>
    );
}