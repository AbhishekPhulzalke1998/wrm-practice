import React, { useState } from 'react';
import './Login.css';
import md5 from 'md5'; 
import UserService from './UserService'; 

export default function Login() {
    const [inputData, setInputData] = useState({ Database: "", UserName: "", Password: "" });

    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.Database || !inputData.UserName || !inputData.Password) {
            alert("All fields are mandatory");
        } else {
            const hashedPassword = md5(inputData.Password); // Hash the password
            const dataWithHashedPassword = { ...inputData, Password: hashedPassword };
            UserService().login(dataWithHashedPassword)
                .then(() => {
                    console.log("Login successful!"); 
                })
                .catch(error => {
                    console.error("Login failed:", error); 
                });
        }
    }

    return (
        <div>
            <form className='container' onSubmit={handleSubmit}>
                <div className='header'>
                    <h1>Login Page</h1>
                </div>

                <div>
                    <label> Database:   </label>
                    <select className='database' id="Database" name='Database' value={inputData.Database} onChange={handleData}>
                        <option value="">Select Database</option>
                        <option value="InnovatorSolutions22">InnovatorSolutions22</option>
                        <option value="InnovatorSolutionsR24">InnovatorSolutionsR24</option>
                    </select>
                </div>

                <div>
                    <label> Username:   </label>
                    <input type='text' id="UserName" placeholder='Enter your UserName' name='UserName' value={inputData.UserName} onChange={handleData}></input>
                </div>

                <div>
                    <label> Password:   </label>
                    <input type='password' id="Password" placeholder='Enter your Password' name='Password' value={inputData.Password} onChange={handleData}></input>
                </div>

                <button className='btn' type='submit'>Submit</button>
            </form>
            <br/><br/><br/> {/* Add space after the form */}
        </div>
    );
}
