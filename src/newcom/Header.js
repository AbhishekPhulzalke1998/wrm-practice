//props are like properties and used as like js function
//used to transfer the data from one component to another component

import React from 'react'


const Header = (props) => {
  console.log(props)
  return (
    <div>
       <h1>hello {props.name}</h1>
    
    </div>
  )
}

export default Header
