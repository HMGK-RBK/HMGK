import React from "react";
import $ from "jquery";

const UpdateForm = (props) => {
  return (
    <div>
      <input id="location" placeholder="location" className="input" />
      <input id="category" placeholder="category" className="input" />
      <input id="desc" placeholder="description" className="input" />
      <input id="price" placeholder="price" className="input" />
      <input
        type="submit"
        className="btn"
        onClick={() => {
          props.updateHome(
            props.homeId,
            $("#location").val(),
            $("#category").val(),
            $("#desc").val(),
            $("#price").val()
          );
          props.changeView('home')
        }}
      />
    </div>
  );
};

export default UpdateForm;
