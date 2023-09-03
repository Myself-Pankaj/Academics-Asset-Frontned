import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getCourse } from "../../redux/actions/courseAction";
import CourseCard from "./CourseCard.jsx";

const Course = () => {
  const dispatch = useDispatch();
  const { error, courses } = useSelector((state) => state.courses);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getCourse());
  }, [dispatch, error]);
  return (
    <section>
      <h1 className="heading1">Courses</h1>
      <div className="course">
        {courses &&
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
      </div>
    </section>
  );
};

export default Course;
