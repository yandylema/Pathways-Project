import React from "react";
import "./comp.css"

const uploadbox = {
  height: "350px",
  width: "400px",
  backgroundColor: "silver",
  textAlign: "center",
  margin: "100px",
};


const UploadBox = (props) => {
  return (<input type="file" style={uploadbox} onChange={props.setImage}/>);
};
export default UploadBox;