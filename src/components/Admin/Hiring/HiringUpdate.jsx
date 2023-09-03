import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearErrors, createJob } from '../../../redux/actions/jobAction';
import { NEW_JOBS_RESET } from '../../../redux/Constants/jobConstant';

const HiringUpdate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, success } = useSelector((state) => state.newJob);

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [aboutjob, setAboutjob] = useState("");
    const [post, setPost] = useState("");
    const [impdatesfrom, setDate] = useState("");
    const [impdatesto, setDates] = useState("");
    const [agelimit, setAge] = useState("");
    const [fee, setFee] = useState("");
    const [procedure, setProcedure] = useState("");
    const [eligibliity, setEligible] = useState("");
    const [skills, setSkills] = useState("");
    const [salary, setSalary] = useState("");
    const [joblocation, setLocation] = useState("");
    const [link, setLink] = useState("");
    const [postedby, setPostedby] = useState("");

    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        if (success) {
          toast.success("Created Successfully");
          navigate("/hiring");
          dispatch({ type: NEW_JOBS_RESET });
        }
      }, [dispatch, error, navigate, success]);

      const createJobsSubmitHandler = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("title", title);
        myForm.set("company", company);
        myForm.set("aboutjob", aboutjob);
        myForm.set("post", post);
        myForm.set("impdatesfrom", impdatesfrom);
        myForm.set("impdatesto", impdatesto);
        myForm.set("agelimit", agelimit);
        myForm.set("fee", fee);
        myForm.set("procedure", procedure);
        myForm.set("skills", skills);
        myForm.set("eligibliity", eligibliity);
        myForm.set("joblocation", joblocation);
        myForm.set("salary", salary);
        myForm.set("link", link);
        myForm.set("postedby", postedby);
    
    
        dispatch(createJob(myForm));
    
      };

      
  return (
    <section className="JobContainer">
      <main>
      <h1>Add new Job</h1>
          <form
            onSubmit={createJobsSubmitHandler}
          >
            <div>
            <label>Title.</label>
              <input
                type="string"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
            <label>Company.</label>
              <input
                type="string"
                placeholder="Organization Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            
            <div>
            <label>Job Role.</label>
              <textarea
                placeholder="About Job"
                value={aboutjob}
                onChange={(e) => setAboutjob(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
           
            <div>
            <label>Post.</label>
              <input
                type="string"
                placeholder="Post"
                required
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </div>
            
            <div>
            <label>Start Date.</label>
              <input
                type="string"
                placeholder="Starting Dates"
                required
                value={impdatesfrom}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            
            <div>
            <label>FInal Date.</label>
              <input
                type="string"
                placeholder="Closing Dates"
                required
                value={impdatesto}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
            
            <div>
            <label>Batch.</label>
              <input
                type="string"
                placeholder="Age Limit"
                required
                value={agelimit}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            
            <div>
            <label> Fees.</label>
              <input
                type="string"
                placeholder="Fess"
                required
                value={fee}
                onChange={(e) => setFee(e.target.value)}
              />
            </div>
            
            <div>
            <label>Process.</label>
              <textarea
                placeholder="Procedure"
                value={procedure}
                onChange={(e) => setProcedure(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
            <label>Eligibility.</label>
              <textarea
                type="string"
                placeholder="Eligibility"
                required
                value={eligibliity}
                onChange={(e) => setEligible(e.target.value)}
              ></textarea>
            </div>

            <div>
            <label>Skills.</label>
              <textarea
                placeholder="Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
            <label>Salary.</label>
              <input
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                cols="30"
                rows="1"
              />
            </div>

    

            <div>
            <label>Location.</label>
              <textarea
                placeholder="Set Location"
                value={joblocation}
                onChange={(e) => setLocation(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
            <label>Apply Link.</label>
              <input
                type="text"
                placeholder="Link"
                required
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div>
            <label>Posyed by.</label>
              <input
                type="text"
                placeholder="Author"
                required
                onChange={(e) => setPostedby(e.target.value)}
              />
            </div>

            <button
              id="createJobBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Add
            </button>
          </form>
        
        </main>
    </section>
  )
}

export default HiringUpdate