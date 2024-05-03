import React, { useState } from 'react';
import md5 from 'md5'; 
import UserService from './UserService'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import saveimgae from './img/saveimgae';
import Swal from 'sweetalert2';






export default function Login() {
    const [inputData, setInputData] = useState({ Database: "", UserName: "", Password: "" });
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

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
                    setShowModal(true); // Show modal on successful login
                })
                .catch(error => {
                    console.error("Login failed:", error); 
                });
        }
    }

    // handlesuccess()
    // {
    //     Swal.fire('success!','your action has been completed','success');
    // }

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
                            <Button   style={{ marginTop: '15px' }} className='btn btn-success' type='submit'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal
    show={showModal}
    onHide={() => setShowModal(false)}
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Semi-transparent background
>
<Modal.Header closeButton style={{ backgroundColor: '#28a745', color: '#fff', borderBottom: 'none' }}>

    <Modal.Title style={{ margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>Congratulations !!</Modal.Title>
</Modal.Header>

    <Modal.Body style={{ backgroundColor: '#f8f9fa', color: '#000',maxHeight:'50px', maxWidth:'220px' }}>
        <p>Your login is successful!</p>
    </Modal.Body>
    <Modal.Footer style={{ backgroundColor: '#28a745', borderTop: 'none' }}>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
        </>
    );
}
