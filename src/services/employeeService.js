import api from "../api/axiosConfig";


export const getEmployees=()=>{

return api.get("/employees");

}



export const deleteEmployee=(id)=>{

return api.delete(
`/employees/${id}`
);

}