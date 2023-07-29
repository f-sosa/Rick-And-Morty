import React from "react";
import Logo from "../../img/logo.jpg";
import "./login.css";
import validation from "../../validation";
const Login = (props) => {
  const {onLogin} = props;
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (inputs) => {
    setInput({ ...input, [inputs.target.name]: inputs.target.value });
    //se mandan lo que tiene en el error (en este caso vacio) + el name que va a contener el value
    setErrors(
      validation({ ...input, [inputs.target.name]: inputs.target.value })
    );
  };

  return (
      <div className="login-box">     
        <img className="avatar" src={Logo}/>
        <h1>Login</h1>
        <form>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
          {errors.e1 ? (<p>{errors.e1}</p>)
          : errors.e2 ? (<p>{errors.e2}</p>)
          :(<p>{errors.e3}</p>)}
        <br/>
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        {errors.p1 ? (<p>{errors.p1}</p>)
          :(<p>{errors.p2}</p>)}

        <button className="btn btn--1" onClick={()=>onLogin(input)} >Submit</button>
      </form>
      </div>
  );
};
export default Login;
