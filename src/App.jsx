import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";


function App(){

return(

<BrowserRouter>

<Navbar />

<Routes>

<Route
path="/"
element={<Dashboard />}
/>


<Route
path="/login"
element={<Login />}
/>


<Route
path="/employees"
element={
<ProtectedRoute>
<Employees />
</ProtectedRoute>
}
/>


</Routes>

</BrowserRouter>

);

}

export default App;