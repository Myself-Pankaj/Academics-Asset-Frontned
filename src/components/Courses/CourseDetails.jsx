import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearErrors,getCourseDetails } from '../../redux/actions/courseAction';
import { Player } from 'video-react';
import Poster from "../../Assets/poster.jpg";
import { DELETE_CONTENT_RESET } from '../../redux/Constants/courseConstants';



const CourseDetails = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { course, error } = useSelector((state) => state.courseDetails);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.course
  );

  const { id } = useParams();


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Deleted Successfully");
      navigate("/courses");
      dispatch({ type: DELETE_CONTENT_RESET });
    }
    dispatch(getCourseDetails(id));
  }, [dispatch, id,error,deleteError,isDeleted,navigate]);



  return (
    <section className='studyCenter'>
      <main>
    
    <h1>{course.title}</h1>
    
    <div>

    <Player
      playsInline
      poster={Poster}
      src={course.links}
    />
    </div>
    <h2>{course.subtitle}</h2>
    <h5>{course.description}</h5>
    <p>{course.author}</p>
    </main>
    </section>
  )
}

export default CourseDetails