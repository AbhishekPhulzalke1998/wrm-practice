//useRef is used for dom manipulate
import React from 'react'
import { useRef,useState } from 'react'

const UseRefHook = () => {

    const refElement = useRef("");
    const [name,setName] = useState("Yoshita");
    console.log("current value of refElement :- ",refElement);

    function Reset()
    {
        setName("");
        refElement.current.focus()
    }
 
     function handleInput()
     {
        refElement.current.style.color="blue"
        refElement.current.value="jainny"
    }


  return (
    <>
       <h1>Learning useRef</h1>
       <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
       <button onClick={Reset}>Reset</button>
       <button onClick={handleInput}>handle input</button>
    </>
  )
}

export default UseRefHook
