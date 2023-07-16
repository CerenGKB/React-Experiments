import React from "react"



export default function Button({children,onChange}){


   
    return(
        <button onClick={onChange} >
     {children}
        </button>
    )
    
}