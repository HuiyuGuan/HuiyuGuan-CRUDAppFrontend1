import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState} from "react";
import { Navigate } from "react-router-dom";

const CampusCard = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {id, name, imageUrl, address, description } = props.campus || [];

  
  const deleteHandler =() => {
    axios
      .delete(`http://localhost:5000/campuses/${id}`)
      .then((response) => {
        console.log(response.status);
        setIsSubmitted(true)
        console.log("end")
      })
      .catch((e) => console.log('something wrong'))
     
  }

  console.log(id)

  if(isSubmitted){
    return  <Navigate to="/campuses" />
  }

  return (
    <div className="card-item">
      <div className="card" style={{margin:1 + 'em'}} >
          <Link to={'/campuses/'+id}>  
            <img className="card-img-top" src={imageUrl} alt="Card cap"
             />
          </Link>
            <div className="card-body">
            <h5>{id} </h5>
            <h5>{name}</h5>
            <h6>{address}</h6>
            <p className="card-text">{description}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>

    
    
  );
};

export default CampusCard;