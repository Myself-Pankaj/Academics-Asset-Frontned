import React from "react";

//import from material ui
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";

//import animation
import {motion} from 'framer-motion';

import { Link } from "react-router-dom";

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <img
          alt="Accedemic-Assets"
          src="https://res.cloudinary.com/buymybook/image/upload/v1659928795/favicon_bajijb.png"
        />
         </motion.div>


      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          {" "}
          <AddShoppingCartIcon />
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <PersonIcon /> : <LoginIcon />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
