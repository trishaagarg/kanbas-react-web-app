import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sign in</h1>
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
        id="wd-signin-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100 mb-3"
      >
        Sign in
      </Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
