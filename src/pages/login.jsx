import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");


  const handleLogin = () => {

    if(username === "admin" && password === "12345") {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/employees");

    }
    else {

      alert("Invalid username or password");

    }

  };


  return (

    <div style={{padding:"30px"}}>

      <h1>Login</h1>


      <input
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />


      <br/><br/>


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <br/><br/>


      <button onClick={handleLogin}>
        Login
      </button>


    </div>

  );

}


export default Login;