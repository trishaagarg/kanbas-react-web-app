import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-3"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-3"
      />
      <Link
        id="wd-signup-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100 mb-3"
      >
        Sign up
      </Link>
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
