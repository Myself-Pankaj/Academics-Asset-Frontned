import React from 'react'
import { motion } from "framer-motion";
import Poster from "../../Assets/poster.jpg"
const Founder = () => { 

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
    <section className="founder">
    <motion.div {...options}>
      <img src={Poster} alt="Founder" height={250} width={240} />
      <h3>Accedemic-Asset's </h3>

      <p>
        Hey, Everyone, We Provide a best platform to plan practice and perform for the student.
        <br />
        Our aim is to create Eco-friendly sites for student's.
      </p>
    </motion.div>
  </section>
  )
}

export default Founder