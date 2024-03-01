import "./Navbar.css";
import logo from "../../Images/allurelogo.png";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Person2Icon from '@mui/icons-material/Person2';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {
  return (
    <>
      <div className="navbar_main">
        <div className="navbar_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar_menu">
          <ul>
            <li>
              <Link to="/" className="navbar_link">
                <HomeIcon/>
              </Link>
            </li>
            <li>
              <Link to="/Rings" className="navbar_link">
                Rings
              </Link>
            </li>
            <li>
              <Link to="/Necklaces" className="navbar_link">
                Necklaces
              </Link>
            </li>
            <li>
              <Link to="/Bangles" className="navbar_link">
                Bangles
              </Link>
            </li>
            <li>
              <Link to="/Bracelets" className="navbar_link">
                Bracelets
              </Link>
            </li>
            <li>
              <Link to="/Add" className="navbar_link">
                Add Items
              </Link>
            </li>
            <li>
              <Link to="/Login" className="navbar_link">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar_item">
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <Person2Icon/>
          </IconButton>
          <IconButton className="navbar_menu_button">
            <MenuRoundedIcon/>
          </IconButton>
        </div>
      </div>
    </>
  );
};
export default Navbar;
