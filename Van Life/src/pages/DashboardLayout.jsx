import React from "react"
import {NavLink} from "react-router-dom"
import {Outlet} from 'react-router-dom'

export default function DashboardLayout(){

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    return (
        <div className=''>
        <NavLink 
                    to="/host"
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>
                
                <NavLink 
                    to="/host/income"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>

                  
                <NavLink 
                    to="/host/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                
                <NavLink 
                    to="/host/reviews"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>
        <Outlet/>
        </div>
       
    
    )


}