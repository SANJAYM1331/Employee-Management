import { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Update = () => {
  //fetching the id from the url
  let params = useParams();
  const [name, setName] = useState("");
  const [department, setDept] = useState("");
  const [salary, setSalary] = useState(0);
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const updateEmployee = () => {
    Axios.put("http://localhost:3000/update", {
      id: params.id,
      name: name,
      department: department,
      salary: salary,
      designation: designation,
      dob: dob,
      address: address,
    })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="m-3">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Employee Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          autoComplete="given-name"
          placeholder="Enter your name"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block text-sm font-medium text-gray-700">
          Department
        </label>
        <input
          type="text"
          name="department"
          id="department"
          value={department}
          placeholder="Enter your department"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
          onChange={(e) => setDept(e.target.value)}
        />
        <label className="block text-sm font-medium text-gray-700">
          Salary
        </label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={salary}
          placeholder="Enter your salary"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
          onChange={(e) => setSalary(e.target.value)}
        />
        <label className="block text-sm font-medium text-gray-700">
          Designation
        </label>
        <input
          type="text"
          name="designation"
          id="designation"
          value={designation}
          placeholder="Enter your designation"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
          onChange={(e) => setDesignation(e.target.value)}
        />
        <label className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="text"
          name="dob"
          id="dob"
          value={dob}
          placeholder="Enter your dob"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
          onChange={(e) => setDob(e.target.value)}
        />
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          placeholder="Enter your address"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br/>
       <button
          type="submit"
          className=" m-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          onClick={updateEmployee}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Update;
