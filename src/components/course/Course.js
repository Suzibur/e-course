import React, { useState } from 'react';
import './Course.css'
import course from '../../fakeData/index'
const Course = (props) => {
    const [courses, setCourses] = useState(course);
    return (
        <div className="card-deck">
            {courses.map(course =>
                <div className="col-md-4">
                    <div className="card">
                        <img src={course.img} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <p className="card-title title">{course.title}</p>
                            <p className="card-text creator">By:{course.by}</p>
                            <p className="price">${course.price}</p>
                            <p className="review"><span className="rating">{course.rating}</span> ({course.review})</p>
                            <button onClick={()=>props.handleAddBtn(course.price)} type="button" className="btn btn-primary">
                                Enrol Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Course;