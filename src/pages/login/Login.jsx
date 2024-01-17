import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <h1>Hello word</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta
            pariatur ut magnam dignissimos, amet distinctio excepturi? Quia,
            animi asperiores explicabo alias velit officiis tenetur! Qui
            explicabo a dolor labore?
          </p>
          <p>Don't you have an account</p>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
          </form>

          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
