import React from "react";

export default function About(props) {
  if (props.mode === "light") {
    var myStyle = {
      color: "black",
      backgroundColor: "white",
    };
  } else {
     myStyle = {
      color: "white",
      backgroundColor: "black",
    };
  }
  return (
    <div className="container my-3" style={myStyle}>
      <div className="container my-3">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img src="https://source.unsplash.com/1600x900/?reading,studying" height="500px" width="500px" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
             
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
          <img src="https://source.unsplash.com/1600x900/?Writing,Typing"  height="500px" width="500px" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
          <img src="https://source.unsplash.com/1600x900/?Editing,Blogs"  height="500px" width="500px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
