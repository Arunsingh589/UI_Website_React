import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilterSharp } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

const Navbar = ({bgColor,color,toggleButton,toggle}) => {
  const bgcolor = color == "black" ? "#cbc5c5" : "black"
  return (
    <>
          <div className="nav_bar"
          style={{
            backgroundColor : `${bgcolor}`
          }}
          
          >
            <div className="logo"
            style={{
              backgroundColor: `${bgColor}`,
              color: `${color}`
            }}>Logo
            <div onClick={toggleButton}>
              {toggle ? (
             <BsToggle2On/>
                  
              ):(
                <BsToggle2Off />
              )}

            </div>
             </div>
            <div className="search"
            style={{
              backgroundColor: `${bgColor}`,
              color: `${color}`
            }}>
                <div className="left"><FcSearch /> Search Here</div>
                <div className="right"><IoFilterSharp /> Filter</div>
            </div>
            <div className="seller"
            style={{
              backgroundColor: `${bgColor}`,
              color: `${color}`
            }}>Become a Seller</div>
          </div>
    </>
  )
}

export default Navbar