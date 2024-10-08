import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kanbas/Account/Signin`}> Signin </Link> <br />
      <Link to={`/Kanbas/Account/Signup`}> Signup </Link> <br />
      <Link to={`/Kanbas/Account/Profile`}> Profile </Link> <br />
    </div>
  );
}
