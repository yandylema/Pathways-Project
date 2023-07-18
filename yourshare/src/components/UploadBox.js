import React from "react";
import "./comp.css"

const uploadbox = {
  height: "350px",
  width: "400px",
  backgroundColor: "silver",
  textAlign: "center",
  margin: "auto",
};


const UploadBox = () => {
  return (<input type="file" style={uploadbox} />);
};
export default UploadBox;