import React from "react";
import { Link } from "react-router-dom";



const StudentCard = (props) => {
  const {id, firstName, lastName, email, imageUrl, gpa } = props.students;
  return (
    <div className="card-item">
      {/* <img className="campus-image" src={img} alt="campus-img" width="400" />
      <div className="header">{name}</div>
      <div>{address}</div>
      <div>{description}</div>    */}

      <div className="card" style={{margin:1 + 'em'}} >
          <Link to={`/students/${props.students.id}`}>  
            <img className="card-img-top" src={imageUrl} alt="Card cap" />
            </Link>
            <div className="card-body">
            <h5>{id} {firstName} {lastName}</h5>
            <h5>Email: {email}</h5>
            <h6>GPA: {gpa}</h6>
        </div>
      </div>
    </div>

    
    
  );
};

export default StudentCard;