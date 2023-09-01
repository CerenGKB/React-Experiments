import React from "react"
import {Link} from "react-router-dom"
import {Outlet} from 'react-router-dom'

export default function DashboardLayout(){
    return (
        <div className=''>
        <Link to="/host">Dashboard </Link>
        <Link to="/host/reviews">Reviews </Link>
        <Link to="/host/income"> Income </Link>
        <Outlet/>
        </div>
       
    
    )


}