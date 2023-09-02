import React from "react"
import {Link, NavLink} from "react-router-dom"


export default function Header(){
    return (
        <nav className='py-10  w-full flex flex-shrink-0 justify-between p-4'>
        <div className='sm:text-3xl text-2xl font-bold'>
        <Link to="/">#VANLIFE </Link>

        </div>
        <div className='flex mr-4 gap-10 items-center text-xl'>
        <NavLink 
            to="/host"
            className={({isActive}) => isActive ? "active-link" : null}
        >
         Host 
        </NavLink>
            
        <NavLink 
            to="/about"
            className={({isActive}) => isActive ? "active-link" : null}
        >
        About 
        </NavLink>
        <NavLink 
            to="/vans"
            className={({isActive}) => isActive ? "active-link" : null}
        >
        Vans 
        </NavLink>
        </div>
        </nav>
    )


}