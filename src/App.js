import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import HeadForm from "./components/HeadForm/HeadForm";
import InputForm from "./components/InputForm/InputForm";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      label: "First Name",
      placeholder: "First Name",
      errorMessage:
        "First name at least 5 character and maximize has 20 character!",
      pattern: "^.{0,20}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      label: "Last Name",
      placeholder: "Last Name",
      errorMessage: "Last name at least 5 character maximize has 20 character!",
      pattern: "^.{5,20}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email",
      errorMessage: "Email is invalid!",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div className="App">
      <div className="content">
        <Header />
        <HeadForm />
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <InputForm
              key={input.id}
              {...input}
              onChange={onChange}
              value={values[input.name]}
            />
          ))}
          <button>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;
