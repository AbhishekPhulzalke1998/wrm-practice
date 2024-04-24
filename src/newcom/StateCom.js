import React from 'react'

const StateCom = () => {

    var x = 10;
    function updatestate()
    {
        x=15;
        console.log(x);
    }
    console.log(x);
    
  return (
    <>
       <h1>Learning React State {x}</h1>
       <button onClick={updatestate}>Click Me</button>
    </>
  )
}

export default StateCom;
