import React from "react";
import validate from "./validateInfo";
import UseForm from "./UseForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  // const { handleChange, handleSubmit, values, errors } = UseForm(
  //   submitForm,
  //   validate
  // );

  return (
    <div className="form-content-right">
      <form className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <h1>Hello Fuck you</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value="Hello"
            // onChange={handleChange}
          />
          {/* {errors.username && <p>{errors.username}</p>} */}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value="hello"
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value="Hello World"
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value="Hello World II"
          />
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
