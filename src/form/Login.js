import React, { useState } from 'react';
import md5 from 'md5'; 
import UserService from './UserService'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

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
        <>
          
            <div className="container" >
                <div style={{ width: '80%', padding: '20px', marginBottom:'100px', marginTop:'100px' ,  height:'60%' }}>
                    <form onSubmit={handleSubmit} className="border p-2 rounded">
                        <div className='header'>
                            <h1 style={{ marginBottom: '20px' }} className="text-center">Login Page</h1>
                        </div>

                        <div className="form-group">
                            <label> Database:   </label>
                            <select className='form-control' id="Database" name='Database' value={inputData.Database} onChange={handleData}>
                                <option value="">Select Database</option>
                                <option value="InnovatorSolutions22">InnovatorSolutions22</option>
                                <option value="InnovatorSolutionsR24">InnovatorSolutionsR24</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label> Username:   </label>
                            <input type='text' id="UserName" className="form-control" placeholder='Enter your UserName' name='UserName' value={inputData.UserName} onChange={handleData} />
                        </div>

                        <div className="form-group">
                            <label> Password:   </label>
                            <input type='password' id="Password" className="form-control" placeholder='Enter your Password' name='Password' value={inputData.Password} onChange={handleData} />
                        </div>

                        <div className="text-center">
                            <Button style={{ marginTop: '15px' }} className='btn btn-success' type='submit'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
