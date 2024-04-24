import React from 'react'
import { useState } from 'react'

const UseState = () => {

    const [count,setcounter] = useState(0)

    function updatecount()
    {
        setcounter(count + 1)
    }
     
  return (
    <>
      <h1>Button Clicked {count} times </h1>
      <button onClick={updatecount}>Click</button>
    </>
  )
}

export default UseState
