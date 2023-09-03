import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";



const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Accedemic-Asset's</h4>
          <p>We are Accedemic-Asset's. The place to learn something new.</p>

          <p>Explore the various way of studies. Click below to see the menu</p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
      </main>
    </section>
  );
};

export default About;
