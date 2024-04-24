// UseEffectHook is used fr performing the side effect tasks like timer functon,
//setInterval function,data fetching 
//Always accept two values one is sideffect function and another one is optional function
// as componet render useeffect hook is also gets run
// when firstly component is ets render useeffect also run and when ,
// functionality or state changed in the component then also useeffect hook also changes.  


 import { useState,useEffect,React } from 'react'; 

const UseEffectHook = () => {

    const [count,setcounter] = useState(0)
    const [data,setData]= useState("Ram")

      useEffect( ()=>{
        console.log("component mounted")
      },[count])


    function updatecount()
    {
        setcounter(count + 1)
    }

    function updateData()
    {
        setData("Seeta")
    }
     
  return (
    <>
      <h1>Button Clicked {count} times </h1>
      <button onClick={updatecount}>Click</button>
      <button onClick={updateData}>Update Data</button>
    </>
  )
}

export default UseEffectHook;