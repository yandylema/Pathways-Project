import React from "react";
const inputBoxText = {
  padding: "20px",
  marginBottom: "10px",
  marginTop: "10px",
  border: "0px",
  borderBottom: "2px solid black",
  width: "100%",
  fontSize: "20px"
}
const InputText = (props) => {
  return (
    <div>
      <input onChange={(e)=>props.onChange(e.target.value)} style={inputBoxText} placeholder={props.placeholderInput} />
    </div>
  );
};

export default InputText;
