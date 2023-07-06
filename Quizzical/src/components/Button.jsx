import React from "react"



export default function Button({children,onStateChange}){

    const [start, setStart] = React.useState(false)
    
    function toggle(){
        const newState = !start;
        setStart(newState);
        onStateChange(newState);
    }

    console.log(start)
    return(
        <button onClick={toggle} >
     {children}
        </button>
    )
    
}