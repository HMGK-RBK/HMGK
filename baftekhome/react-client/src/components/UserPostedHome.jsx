import React from "react";

const UserPostedHome = function (props) {
  if(props.state.v === ""){
    return (
      <div>
        <img src="" />
        <h2>Apartment for Sale at {}</h2>
        <h2>Categroy: {}</h2>
        <h4>Description: {}</h4>
        <h4>Price: {} $</h4>
        <h4>Contact Information: {}</h4>
        <br></br>
        <button type="submit">Delete</button>
        <br></br>
        <button type="submit">Update</button>
      </div>
    );
  }else if(props.state.v === "update"){
    return (
      <div>
      <label>Image:</label>
      <br></br>
      <input placeholder="image" id="image" />
      <br></br>
      <labe>Description:</labe>
      <br></br>
      <input placeholder="description" id="description" />
      <br></br>
      <labe>Location:</labe>
      <br></br>
      <input placeholder="location" id="location" />
      <br></br>
      <labe>Categroy:</labe>
      <br></br>
      <input placeholder="category" id="category" />
      <br></br>
      <labe>Contact Information:</labe>
      <br></br>
      <input placeholder="contactInformation" id="contactInformation" />
      <br></br>
      <labe>Price:</labe>
      <br></br>
      <input placeholder="price" id="price" />
      <br></br>
      <button type="submit">Delete</button>
      <br></br>
      <button type="submit">Update</button>
      </div>
    )
  }
};

export default UserPostedHome;