import React from 'react'
import { Link } from 'react-router-dom'


const CourseCard = ({course}) => {
  return (
    <Link className='coursebox' to={`/course/${course._id}`}>
    <section >
    <h1 className='wave'>{course.title}</h1>
    <div className='wave'></div>
     <p className="wave"></p>
    </section>
     </Link>
  )
}

export default CourseCard