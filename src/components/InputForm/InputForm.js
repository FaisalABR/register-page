import React, { useState } from "react";

import "./input-form.css";

const InputForm = (props) => {
  const [focus, setFocus] = useState(false);
  const { id, label, onChange, value, errorMessage, ...inputsForm } = props;

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="container-input">
      <label>{label}</label>
      <input
        {...inputsForm}
        onChange={onChange}
        value={value}
        onBlur={handleFocus}
        focused={focus.toString()}
        onFocus={() => inputsForm.name === "confirmPassword" && setFocus(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputForm;
