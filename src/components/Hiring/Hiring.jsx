import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getJobs } from "../../redux/actions/jobAction";
import HiringCad from "./HiringCad";
import "./Hiring.css";

const Hiring = ({ match }) => {
  const [title] = useState("");
  const [company] = useState("");

  const { jobs, error } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getJobs());
  }, [dispatch, error, title, company]);
  return (
    <section>
      <h1 className="h1">Hiring Update</h1>
      <div className="jobs">
        {jobs && jobs.map((job) => <HiringCad key={job._id} job={job} />)}
      </div>
    </section>
  );
};

export default Hiring;
