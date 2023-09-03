import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { clearErrors } from "../../redux/actions/quraAction";
import { createCourse } from "../../redux/actions/courseAction";
import { motion } from "framer-motion";
import { NEW_CONTENT_RESET } from "../../redux/Constants/courseConstants";

const AddCourse = ({delay = 0}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newCourse);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [links, setLinks] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success(" Created Successfully");
      navigate("/courses");
      dispatch({ type: NEW_CONTENT_RESET });
    }
  }, [dispatch, error, navigate, success]);

  const createCourseSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("subtitle", subtitle);
    myForm.set("description", description);
    myForm.set("links", links);
    myForm.set("author", author);

    dispatch(createCourse(myForm));
  };

  return (
    <section className="addcourse">
      <main >
      <h1>Create Course</h1>
        <form
          className="createForm"
          encType="multipart/form-data"
          onSubmit={createCourseSubmitHandler}
        >
           
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
            }}>
            <label>Course Name.</label>
            <input
              type="text"
              placeholder="Course Name"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </motion.div>

          <motion.div  initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }}>
            <label>Subtitle.</label>
            <input
              type="text"
              placeholder="Subtitle"
              required
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </motion.div>

          <motion.div  initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }}>
            <label>Description.</label>
            <textarea
              placeholder=" Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="70"
              rows="2"
            ></textarea>
          </motion.div>

          <motion.div  initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }}>
            <label>Vedio Link.</label>
            <input
              type="text"
              placeholder=" Vedio Links"
              required
              value={links}
              onChange={(e) => setLinks(e.target.value)}
            />
          </motion.div>
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
            }}>
            <label>By.</label>
            <input
              type="text"
              placeholder="Created By"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </motion.div>

          <button
            id="createBtn"
            type="submit"
            disabled={loading ? true : false}
          >
            Create
          </button>
        </form>
      </main>
    </section>
  );
};

export default AddCourse;
