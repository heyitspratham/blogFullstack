import React from "react";
// @ts-ignore
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext)

  return (
    <div>
      <div className="flex justify-between py-3">
        <div className="w-32">
          <img src={Logo} alt="" />
        </div>
        <div className="flex items-center  gap-3">
          <Link to="/?cat=art">ART</Link>
          <Link to="/?cat=science">SCIENCE</Link>
          <Link to="/?cat=technology">TECHNOLOGY</Link>
          <Link to="/?cat=cinema">CINEMA</Link>
          <Link to="/?cat=food">FOOD</Link>
          <span className="text-xl font-semibold">{currentUser?.username}</span>
          {currentUser? <span onClick={logout} className="text-xl font-semibold cursor-pointer">Logout</span> : <Link to="/login">Login</Link>}
          <Link
            className="text-base bg-main h-12 w-12 rounded-full flex items-center justify-center font-light hover:bg-white hover:text-teal-500 hover:border hover:border-teal-500 "
            to="/write"
          >
            Write
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
