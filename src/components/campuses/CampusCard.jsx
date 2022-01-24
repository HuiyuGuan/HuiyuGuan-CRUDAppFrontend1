import React from "react";
import { Link } from "react-router-dom";



const CampusCard = (props) => {
  const {id, name, imageUrl, address, description } = props.campus;
  return (
    <div className="card-item">
      {/* <img className="campus-image" src={img} alt="campus-img" width="400" />
      <div className="header">{name}</div>
      <div>{address}</div>
      <div>{description}</div>    */}

      <div className="card" style={{margin:1 + 'em'}} >
          <Link to={`/campuses/${props.campus.id}`}>  
            <img className="card-img-top" src={imageUrl} alt="Card cap" />
            </Link>
            <div className="card-body">
            <h5>{id} {name}</h5>
            <h6>{address}</h6>
            <p className="card-text">{description}</p>
        </div>
      </div>
    </div>

    
    
  );
};

export default CampusCard;