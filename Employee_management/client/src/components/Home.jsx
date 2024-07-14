import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState(0);
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  //getting all the employee details
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    console.log(name);
    if (
      name === "" ||
      department === "" ||
      salary === "" ||
      designation === "" ||
      dob === "" ||
      address === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    Axios.post("http://localhost:3000/create", {
      name: name,
      department: department,
      salary: salary,
      designation: designation,
      dob: dob,
      address: address,
    }).then(() => {
      console.log("successfully added");
    });
  };

  //fetching the employee details
  const getEmployees = () => {
    Axios.get("http://localhost:3000/employees").then((response) => {
      //debugging
      setEmployeeList(response.data);
    });
  };

  //delete employee
  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        getEmployees();
        // Add any additional logic here if needed
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col p-2.5 items-center">
        <label htmlFor="name" className="text-lg font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Department</label>
        <input
          type="text"
          id="department"
          placeholder="Enter your department"
          onChange={(e) => setDepartment(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Salary</label>
        <input
          type="number"
          id="salary"
          placeholder="Enter your salary"
          onChange={(e) => setSalary(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">designation</label>
        <input
          type="text"
          id="age"
          placeholder="Enter your designation"
          onChange={(e) => setDesignation(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">dob</label>
        <input
          type="text"
          id="dob"
          placeholder="Enter your dob"
          onChange={(e) => setDob(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-3"
          onClick={addEmployee}
        >
          Add Employee
        </button>
      </div>
      <button
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 w-1/3 h-12"
        onClick={getEmployees}
      >
        Show Employee detail
      </button>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-lg text-left border border-slate-700">
          <thead className="text-lg uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3">Employee Name</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Salary</th>
              <th className="px-6 py-3">Designation</th>
              <th className="px-6 py-3">DOB</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Update</th>
              <th className="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((val, key) => (
              <tr key={key} className="border border-slate-700">
                <td className="px-6 py-4 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {val.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {val.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {val.salary}
                </td>
                <td className="px-6 py-4 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {val.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {val.dob}
                </td>
                <td className="px-6 py-4 whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {val.address}
                </td>
                <td>
                  <Link
                    to={`/update/${val.id}`}
                    className="text-white  bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteEmployee(val.id)}
                    className="text-white  bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
