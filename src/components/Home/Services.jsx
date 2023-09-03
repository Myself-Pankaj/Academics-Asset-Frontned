import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import RateReviewIcon from '@mui/icons-material/RateReview';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
const Services = ({delay=0}) => {
  return (
    <section id="service">
      <h1>SERVICES</h1>

      <motion.div 
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
      }} className="card">

        
        <Link to="/getproductdetail" className="card-1">
          <AutoStoriesIcon/>
          <p>Reading<br/> Material </p>
        </Link>
        
        <Link to="/courses" className="card-1">
          <LibraryBooksIcon/>
          <p>Courses to <br/>  Study</p>
        </Link>

        <Link to="/qora" className="card-1">
          <RateReviewIcon/>
          <p>Ask &  <br/> Learn</p>
        </Link>

        <Link to="/hiring" className="card-1">
          <WorkHistoryIcon/>
          <p>Hiring <br/>  Updates</p>
        </Link>

      </motion.div>
      
    </section>
  );
};

export default Services;
