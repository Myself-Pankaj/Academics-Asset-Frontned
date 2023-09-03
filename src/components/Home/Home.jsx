import React from "react";
import Founder from "./Founder";
//Animation
import { motion } from "framer-motion";
import Services from "./Services";



const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>Accedemic Assets </motion.h1>
          <motion.p
            {...options}
            transition={{
              delay: 0.2,
            }}
          >
            First plan ,then practice and finally Perform .
          </motion.p>
        </div>

        <motion.a
          href="#service"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          Explore Services
        </motion.a>
      </section>

      <Services />
      <Founder />

    </>
  );
};

export default Home;
