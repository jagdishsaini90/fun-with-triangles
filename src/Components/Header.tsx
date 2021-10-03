import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <p className="title">Fun with Triangles</p>
        <ul>
          <Link to="/istriangle" className="link">
            <li>is Triangle?</li>
          </Link>
          <Link to="/" className="link">
            <li>Quiz</li>
          </Link>
          <Link to="/hypo" className="link">
            <li>Hypotenuse</li>
          </Link>
          <Link to="/area" className="link">
            <li>Area of Triangle</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
