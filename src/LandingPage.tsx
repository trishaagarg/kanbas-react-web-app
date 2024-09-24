import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to My Landing Page</h1>
            <h2>Trisha Garg - Section 01</h2>
            <h3>Lab Assignments</h3>
            <ul>
            <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
            </ul>
            <h3>Useful Links</h3>
            <ul>
                <li><a href="https://github.com/trishaagarg/kanbas-react-web-app/tree/main">GitHub Repo</a></li>
                <li><a href="https://main--cerulean-rugelach-4242d9.netlify.app/#/Kanbas/Account/Signin">Netlify Deployment</a></li>
            </ul>
            <h3>Applications</h3>
            <ul>
            <Link to="/kanbas">Go to Kanbas Application</Link>
            </ul>
        </div>
    );
}