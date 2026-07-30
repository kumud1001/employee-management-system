import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar(){

const navigate = useNavigate();


const logout = () => {

localStorage.removeItem("isLoggedIn");

navigate("/login");

};


return(

<nav style={{
padding:"15px",
background:"#333"
}}>


<Link 
to="/"
style={{color:"white",margin:"10px"}}
>
Dashboard
</Link>


<Link
to="/employees"
style={{color:"white",margin:"10px"}}
>
Employees
</Link>


<Link
to="/login"
style={{color:"white",margin:"10px"}}
>
Login
</Link>


<button onClick={logout}>
Logout
</button>


</nav>

);

}

export default Navbar;