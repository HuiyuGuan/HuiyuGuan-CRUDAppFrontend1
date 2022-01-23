import React, { Fragment, useState } from "react";
// import api from '../src/api/campuses';
import campuses from "../../api/campuses";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";




const InputCampuses = (props) => {

    const [newCampus, setNewCampus] = useState({
        id: "",
        name: "",
        imageUrl: "",
        address: "",
        description: ""
    });

    const handleChange2 = (event) => {
        event.preventDefault();
        props.addCampusHandler(newCampus)

        return <Navigate to="/campuses" />
    }

    const updateCampus = (event) => {
        setNewCampus((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }

        ))
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Campus Info</h1>
            {/* <form onSubmit={handleSubmit} className="mt-5" > */}
            <form onSubmit={handleChange2} className="mt-5" >
                <input type="int"
                    name="id"
                    className="form-control"
                    placeholder='Enter id'
                    value={newCampus.id}
                    // onChange={handleChange}
                    onChange={(event) => updateCampus(event)}
                />
                <input type="textarea"
                    name="name"
                    className="form-control"
                    placeholder='Enter Name'
                    value={newCampus.name}
                    // onChange={handleChange}
                    onChange={(event) => updateCampus(event)}
                />
                <input type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder='Enter image link'
                    value={newCampus.imageUrl}
                    // onChange={handleChange}
                    onChange={(event) => updateCampus(event)}
                />
                <input type="text"
                    name="address"
                    className="form-control"
                    value={newCampus.address}
                    placeholder='Enter Address'
                    // onChange={handleChange}
                    onChange={(event) => updateCampus(event)}
                />
                <input type="text"
                    name="description"
                    className="form-control"
                    placeholder='Enter description'
                    value={newCampus.description}
                    // onChange={handleChange}
                    onChange={(event) => updateCampus(event)}
                />



                    <button className="btn btn-primary">Change</button>
            </form>
        </Fragment>

    )
};

export default InputCampuses;
