import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import lang from "../../../assets/en.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navbar.scss";
const Navbar = ():JSX.Element => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="lang">
            <img src={lang} alt="en" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="currency">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="category">
            <Link to={"/products/1"}>Men</Link>
          </div>
          <div className="category">
            <Link to={"/products/2"}>Women</Link>
          </div>
          <div className="category">
            <Link to={"/products/3"}>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">LAMASTORE</Link>
        </div>
        <div className="right">
          <div className="sections">
            <Link to="/">Home</Link>
          </div>
          <div className="sections">
            <Link to="">About</Link>
          </div>
          <div className="sections">
            <Link to="">Contact</Link>
          </div>
          <div className="sections">
            <Link to="">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cart-icon">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
