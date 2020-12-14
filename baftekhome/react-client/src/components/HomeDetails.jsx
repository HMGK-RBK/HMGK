import React from "react";



const HomeDetail = function (props) {

  return (
    <div>
      <div >
      <img className='img' src={props.images[0].image1} />
      <img className='img' src={props.images[0].image2} />
      <img className='img' src={props.images[0].image3} />
      </div>
      <h2>Apartment for Sale at {props.home[0].location}</h2>
      <h2>Categroy: {props.home[0].category}</h2>
      <h4>Description: {props.home[0].description}</h4>
      <h4>Price: {props.home[0].price} $</h4>
      <h4>Contact Information: {props.home[0].contactInformation}</h4>
    </div>
  );
};

export default HomeDetail;
