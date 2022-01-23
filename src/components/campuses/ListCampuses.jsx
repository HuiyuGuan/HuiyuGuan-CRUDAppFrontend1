import React from "react";
import { Link } from "react-router-dom";
import CampusCard from "./CampusCard";

export default function ListCampuses(props) {
    console.log(props);
    const info = props;
    console.log(info)

    
    const renderCampuses = props.campuses.map(campus=> {
       
       
      return(
            <CampusCard
              // props={[campus]}
               campus= {campus}    
               key={campus.id}      
            />
        )
    });
  
  return(
    <div>
      <h1> CampusList</h1> 
      <Link to={"/campuses/add"}>
          <button>Add Campus</button>
      </Link>
       {renderCampuses}      
    </div>
  );
};
