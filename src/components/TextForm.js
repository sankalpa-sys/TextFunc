import React, { useState } from "react";
import '../stylesheets/TextForm.css';


export default function TextForm(props) {
  const click = () => {
    console.log("Upper Button clicked");
    let newT = text.toUpperCase();
    setText(newT);
    props.showAlert("Text converted to Uppercase!!", "success");
  };
  const lowClick = () => {
    console.log("lower Button clicked");
    let newT = text.toLowerCase();
    setText(newT);
    props.showAlert("Text converted to lowercase!!", "success");
  };
  const clear = () => {
    console.log("Clear Button clicked");
    let newT = "";
    setText(newT);
    props.showAlert("Text cleared!!", "success");
  };
  const change = (event) => {
    console.log("fired change function");
    let newText = event.target.value;
    setText(newText);
  };
  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!!", "success");
  };
  const extraSpace = () => {
    let newTe = text.split(/[ ]+/);
    setText(newTe.join(" "));
    props.showAlert("Removed extra spaces!!", "success");
  };
  const [text, setText] = useState("");
  return (
    <div>
      <h3 style={{ color: props.mode === "light" ? "black" : "white" }}>
        {props.heading}
      </h3>
      <div className="mb-3 my-2">
        <textarea
          className="form-control"
          onChange={change}
          id="textbox"
          value={text}
          style={{
            backgroundColor: props.mode === "light" ? "#EBEBEE" : "#3B3B46",
            color: props.mode === "light" ? "black" : "white",
          }}
          rows="10"
        ></textarea>
      </div>
      <div className="container col-12">
        <button disabled = {text.length === 0} className="btn btn-danger btn-sm mx-2 my-1" onClick={click}>
          UpperCase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary btn-sm mx-2 my-1" onClick={lowClick}>
          Lowercase
        </button>
        <button disabled = {text.length === 0} className="btn btn-success btn-sm mx-2 my-1" onClick={clear}>
          Clear
        </button>
        <button disabled = {text.length === 0} className="btn btn-secondary btn-sm mx-2 my-1" onClick={copy}>
          Copy
        </button>
        <button disabled = {text.length === 0} className="btn btn-warning btn-sm mx-2 my-1" onClick={extraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-4">
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your Text summary
        </h3>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {" "}
          {text.split(/\s+/).filter((element) => {return element.length!==0 }).length} words|{text.length} characters|
          {0.008 * text.split(" ").filter((element) => {return element.length!==0 }).length} minutes to read
        </p>

        <div>

          <div className="container-fluid py-5">
            <h6
              className="display-5 fs-3"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              <u>Preview</u>
            </h6>
            <p
              className="col-md-12 fs-6"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
              {text.length === 0 ? "Nothing to preview" : text }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
