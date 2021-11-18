import userEvent from '@testing-library/user-event';
import { Fragment, useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
//import coursesData from "../data/coursesData";

export default function Courses(){
    // console.log(coursesData);
    // console.log(coursesData[0]);
    
    //State that will be used to store the courses retrieved from the database
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/courses/all')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            //Sets the "courses" state to map the data retrieved from the fetch request in several "CourseCard" components
            setCourses(
                data.map(course => {
                    return(
                        <CourseCard key={course.id} courseProp={course} />
                    )
                })
            )
        })
    }, [])

    
    return (
        <Fragment>
            {courses}
        </Fragment>
    )
}