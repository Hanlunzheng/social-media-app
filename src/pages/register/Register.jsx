import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="left">
          <h1>Aaron Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta
            pariatur ut magnam dignissimos, amet distinctio excepturi? Quia,
            animi asperiores explicabo alias velit officiis tenetur! Qui
            explicabo a dolor labore?
          </p>
          <p>Do you have an account</p>

          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
          </form>

          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
