import React from "react";

const HomeDetail = function (props) {
  return (
    <div className = 'containerr' >
      <div>
        <img className="img" src={props.images[0].image1} /><br></br>
        <img className="img" src={props.images[0].image2} /><br></br>
        <img className="img" src={props.images[0].image3} /><br></br>
      </div>
      <h2>Apartment for Sale at : {props.home[0].location}</h2>
      <h2>Categroy:</h2>
      <h4 > {props.home[0].category}</h4>
      <h2>Description:</h2>
      <h4> {props.home[0].description}</h4>
      <h2>Price:</h2>
      <h4>{props.home[0].price} $</h4>
      <h2>Contact Information: </h2>
      <h4>{props.home[0].contactInformation}</h4>
    </div>
  );
};

export default HomeDetail;
