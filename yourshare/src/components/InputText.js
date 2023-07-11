import React from "react";

const InputText = (props) => {
  return (
    <div>
      <input className="inputBoxText" placeholder={props.placeholderInput} />
    </div>
  );
};

export default InputText;
