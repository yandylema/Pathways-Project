import React from "react";
const inputBoxText = {
  padding: "20px",
  marginBottom: "40px",
  marginTop: "40px",
  border: "0px",
  borderBottom: "2px solid black",
  width: "350px",
};
const InputText = (props) => {
  return (
    <div>
      <input style={inputBoxText} placeholder={props.placeholderInput} />
    </div>
  );
};

export default InputText;
