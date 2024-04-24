import React, { useState } from 'react'
import axios from 'axios'

function AxiosPost() {
    const data = { fname: " ", lastName: " " };
    const [inputData, setInputData] = useState(data)   //We used useState Concept Here

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)  //
            .then((response) => {
                console.log(response)
            })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
            .then((response) => {
                console.log(response)
            })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => {
                console.log(response)
            })
    }

    return (

        <>
            <label>First Name: </label>
            <input type='text' name='fname' value={inputData.fname} onChange={handleData}></input><br />
            <label>Last Name: </label>
            <input type='text' name='lname' value={inputData.lname} onChange={handleData}></input><br />

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </>

    )
}


export default AxiosPost