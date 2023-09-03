import React from "react";
import { Link } from "react-router-dom";

const HiringCad = ({ job }) => {
  return (
    <section className="jobCard-1">
    <Link  to={`/hiringUpdate/${job._id}`}>
      <div className="jobcard" >
        <h1>{job.title}</h1>
        <div><p>Company</p><p>: {job.company}</p></div>
        <div><p>Degree</p><p>: {job.post}</p></div>
        <div><p>Salary</p><p>: {job.salary}</p></div>
        <h2><p>Eligibility</p><p>: {job.eligibliity}</p></h2>
        <div><p>Location</p><p>: {job.joblocation}</p></div>
        <h3 className="link-1">Apply Now</h3>
      </div>
    </Link>
    </section>
  );
};

export default HiringCad;
