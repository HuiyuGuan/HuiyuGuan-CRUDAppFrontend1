import React, { Fragment, useState } from "react";
// import api from '../src/api/campuses';
// import campuses from "../../api/campuses";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";




const InputStudents = (props) => {

    const [newStudent, setNewStudent] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        gpa: ""
    });


    const handleChange2 = (event) => {
        event.preventDefault();
        props.addStudentHandler(newStudent)

        return <Navigate to="/student" />
    }

    const updateStudent = (event) => {
        setNewStudent((prev) => ({
            ...prev, [event.target.firstName]: event.target.value
        }

        ))
    }


    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Student Info</h1>
            {/* <form onSubmit={handleSubmit} className="mt-5" > */}
            <form onSubmit={handleChange2} className="mt-5" >
                <input type="textarea"
                    name="id"
                    className="form-control"
                    placeholder='Enter id'
                    value={newStudent.id}
                    // onChange={handleChange}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="textarea"
                    firstName="firstName"
                    className="form-control"
                    placeholder='Enter First Name'
                    value={newStudent.firstName}
                    // onChange={handleChange}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="textarea"
                    lastName="lastName"
                    className="form-control"
                    placeholder='Enter Last Name'
                    value={newStudent.lastName}
                    // onChange={handleChange}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="textarea"
                    name="email"
                    className="form-control"
                    value={newStudent.email}
                    placeholder='Enter Email'
                    // onChange={handleChange}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder='Enter image link'
                    value={newStudent.imageUrl}
                    // onChange={handleChange}
                    onChange={(event) => updateStudent(event)}
                />
                <input type="text"
                    name="gpa"
                    className="form-control"
                    placeholder='Enter gpa'
                    value={newStudent.gpa}
                    // onChange={handleChange}
                    onChange={(event) => updateStudent(event)}
                />



                    <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>

    )
};

export default InputStudents;