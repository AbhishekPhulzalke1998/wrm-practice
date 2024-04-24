import axios from 'axios'
import React, { useEffect, useState } from 'react'
 
function AxiosGet() {
 
const [userdata,setdata]= useState([]);

useEffect(() =>{
axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response)
        setdata(response.data)
    })
},[])
 
return(
 
    <div>AxiosGet
        {userdata.map((data)=>{
            return(
<div>{data.name}</div>
            )
        })}
    </div>
  )
}
export default AxiosGet