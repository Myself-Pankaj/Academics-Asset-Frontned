import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const QueAnsCard = ({que, delay = 0}) => {
  return (
    <section>
   
    <motion.div
      className="queAnsCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <main>


      <Link to={`/QueAns/${que._id}`}>
        <div className="queCard">
          <h2>{que.title}</h2>
          <h5>Q : {que.question}?</h5>
        </div>
        </Link>
      </main>

    </motion.div>
  
  </section>
  )
}

export default QueAnsCard