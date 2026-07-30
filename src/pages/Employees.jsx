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
    }
  ]);


  const [form, setForm] = useState({
    id: "",
    name: "",
    department: "",
    role: ""
  });


  const [editMode, setEditMode] = useState(false);


  // Input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  // Add / Update Employee
  const saveEmployee = () => {

    if (editMode) {

      setEmployees(
        employees.map(emp =>
          emp.id === form.id ? form : emp
        )
      );

      setEditMode(false);

    } else {

      const newEmployee = {
        ...form,
        id: employees.length + 1
      };

      setEmployees([
        ...employees,
        newEmployee
      ]);
    }


    setForm({
      id: "",
      name: "",
      department: "",
      role: ""
    });

  };


  // Edit button
  const editEmployee = (emp) => {

    setForm(emp);
    setEditMode(true);

  };


  // Delete button
  const deleteEmployee = (id) => {

    setEmployees(
      employees.filter(emp => emp.id !== id)
    );

  };


  return (

    <div style={{padding:"30px"}}>

      <h1>Employee Management System</h1>


      <h2>
        {editMode ? "Edit Employee" : "Add Employee"}
      </h2>


      <input
        name="name"
        placeholder="Name"
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
        {editMode ? "Update Employee" : "Add Employee"}
      </button>


      <hr/>


      <h2>Employee List</h2>


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
          employees.map(emp => (

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>


              <td>

                <button onClick={() => editEmployee(emp)}>
                  Edit
                </button>


                <button onClick={() => deleteEmployee(emp.id)}>
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