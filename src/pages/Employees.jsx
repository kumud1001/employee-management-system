import React, { useState } from "react";

function Employees() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Smith",
      department: "IT",
      role: "Developer"
    },
    {
      id: 2,
      name: "Alice Brown",
      department: "HR",
      role: "Manager"
    },
    {
      id: 3,
      name: "David Lee",
      department: "Finance",
      role: "Accountant"
    }
  ]);


  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    id: "",
    name: "",
    department: "",
    role: ""
  });


  const [editMode, setEditMode] = useState(false);


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const saveEmployee = () => {

    if(editMode){

      setEmployees(
        employees.map(emp =>
          emp.id === form.id ? form : emp
        )
      );

      setEditMode(false);

    }
    else{

      setEmployees([
        ...employees,
        {
          ...form,
          id: employees.length + 1
        }
      ]);

    }


    setForm({
      id:"",
      name:"",
      department:"",
      role:""
    });

  };


  const editEmployee = (emp)=>{

    setForm(emp);
    setEditMode(true);

  };


  const deleteEmployee=(id)=>{

    setEmployees(
      employees.filter(emp=>emp.id!==id)
    );

  };


  // Search logic
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase()
    .includes(search.toLowerCase())
  );


  return (

    <div style={{padding:"30px"}}>

      <h1>Employee Management System</h1>


      <h2>
        {editMode ? "Update Employee" : "Add Employee"}
      </h2>


      <input
        name="name"
        placeholder="Employee Name"
        value={form.name}
        onChange={handleChange}
      />


      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />


      <input
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
      />


      <button onClick={saveEmployee}>
        {
          editMode 
          ? "Update Employee"
          : "Add Employee"
        }
      </button>


      <hr/>


      <h2>Employee List</h2>


      <input
        placeholder="Search Employee..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />


      <br/><br/>


      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Action</th>
          </tr>

        </thead>


        <tbody>

        {
          filteredEmployees.map(emp=>(

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>

              <td>

                <button
                  onClick={()=>editEmployee(emp)}
                >
                  Edit
                </button>


                <button
                  onClick={()=>deleteEmployee(emp.id)}
                >
                  Delete
                </button>


              </td>

            </tr>

          ))
        }

        </tbody>


      </table>


    </div>

  );

}

export default Employees;