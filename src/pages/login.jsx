import {useState} from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";


function Login(){

const [username,setUsername]
=useState("");

const [password,setPassword]
=useState("");


const navigate=useNavigate();



const login=async()=>{


const response =
await axios.post(
"http://localhost:8080/login",
{
username,
password
}
);



localStorage.setItem(
"token",
response.data.token
);



navigate("/dashboard");


}



return(

<div>

<h2>
Login
</h2>


<input

placeholder="Username"

onChange={
e=>setUsername(e.target.value)
}

/>


<input

type="password"

placeholder="Password"

onChange={
e=>setPassword(e.target.value)
}

/>


<button onClick={login}>

Login

</button>


</div>

)

}


export default Login;