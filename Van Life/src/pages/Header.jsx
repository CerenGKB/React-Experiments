import React from "react"
import {Link} from "react-router-dom"


export default function Header(){
    return (
        <nav className='py-10  w-full flex flex-shrink-0 justify-between p-4'>
        <div className='sm:text-3xl text-2xl font-bold'>
        <Link to="/">#VANLIFE </Link>

        </div>
        <div className='flex mr-4 gap-10 items-center text-xl'>
        <Link to="/host">Host </Link>
        <Link to="/about">About </Link>
        <Link to="/vans">Vans </Link>
        </div>
        </nav>
    )


}