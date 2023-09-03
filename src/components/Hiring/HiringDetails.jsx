import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getJobDetails } from "../../redux/actions/jobAction";

const HiringDetails = () => {
  const dispatch = useDispatch();

  const { job, error } = useSelector((state) => state.jobDetails);
  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getJobDetails(id));
  }, [dispatch, id, error]);

  return (
    <section>
      <div className="JobDetails">
        <div className="JobDetails-1">
          <h2>{job.title}</h2>
        </div>
        <div className="JobDetails-images">
          <img
            src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Capgemini_nsnsmt.png"
            alt=" Capgemine. logo"
          />
          <img
            src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Google_ctmhyv.png"
            alt="IBM.logo"
          />

          <img
            src="https://res.cloudinary.com/buymybook/image/upload/v1659795566/Amazon_twpett.png"
            alt="Amazon.logo"
          />
          <img
            src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/Hexaware_Technologies-Logo.wine-removebg-preview_utcljf.png"
            alt="Hexaware.logo"
          />

          <img
            src="https://res.cloudinary.com/buymybook/image/upload/v1659797433/Microsoft_India-Logo.wine-removebg-preview_l7ahy3.png"
            alt="Microsoft.logo"
          />
        </div>
        <div className="JobDetails-2">{job.company}</div>

        <div className="JobDetails-3">
          <p>About Job </p>
          {job.aboutjob}
        </div>
        {/* Table */}
        <table>
          <tr>
            <th>Post</th>
            <th> {job.post}</th>
          </tr>

          <tr>
            <th> Starting Date</th>
            <th> {job.impdatesfrom}</th>
          </tr>

          <tr>
            <th> Closing Date </th>
            <th> {job.impdatesto}</th>
          </tr>

          <tr>
            <th> Age Limit</th>
            <th> {job.agelimit}</th>
          </tr>

          <tr>
            <th> Required Skills</th>
            <th> {job.skills}</th>
          </tr>

          <tr>
            <th>Salary Package</th>
            <th> {job.salary}</th>
          </tr>

          <tr>
            <th>Job Location</th>
            <th> {job.joblocation}</th>
          </tr>

          <tr>
            <th> Application Fees</th>
            <th> {job.fee}</th>
          </tr>
        </table>

        <div className="JobDetails-4">
          <p>Hiring Process</p>
          <div className="JobDetails-4-1">{job.procedure}</div>
        </div>

        <div className="JobDetails-5">
          <p>Eligibility</p>
          <div className="JobDetails-4-1"> {job.eligibliity}</div>
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={job.link}
          className="JobDetails-6"
        >
          {" "}
          Apply Now
        </a>

        <div className="JobDetails-7">Posted By: {job.postedby}</div>
      </div>
    </section>
  );
};

export default HiringDetails;
