import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
const SideBar = ({bgColor, color}) => {
  return (
    <>
      <div className="side_bar_content" style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`
      }}>
        <div className="top_content">
            <div className="items"><FaHome  className='icons'/>Home</div>
            <div className="items"><IoMdNotifications  className='icons'/>Notification</div>
            <div className="items"><FaShoppingBag  className='icons'/>Shop</div>
            <div className="items"><BiSolidConversation  className='icons'/>  Conversation</div>
            <div className="items"><FaWallet className='icons'/> Wallet</div>
            <div className="items"><BsYoutube  className='icons'/>  Subscribe</div>
            <div className="items"><CgProfile  className='icons'/> My Profile</div>
        </div>
        <div className="bottom_content items">
            <MdOutlineLogout className='icons' />
           Log Out
        </div>
      </div>
    </>
  )
}

export default SideBar
