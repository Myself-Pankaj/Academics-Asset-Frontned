import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Accedemic Asset's</h2>

        <p>We are trying to give students as much help as we can.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @accedemicassets</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://instagram.com/ifeelpankaj">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/ifeelpankaj">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/meabhisingh">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
