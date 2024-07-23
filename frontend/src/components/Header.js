import { Link } from "react-router-dom";
import "./styles/Header.css";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menubar = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
      <h1 className="logo">FnMoney</h1>
      <span onClick={menubar} className="menu">
        <IoMenu />
      </span>
      <nav className={`navbar ${menu && "close-nav"}`}>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to="/assessments" className="link">
          <li>Assessments</li>
        </Link>
        <Link to="/contact" className="link">
          <li>Contact</li>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
