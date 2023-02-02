import React from 'react'
import { FaBars } from "react-icons/fa";

const SidebarBtn = ({ onClick }) => {
  return (
    <div>
        <button className='sidebarBtn' onClick={onClick}><FaBars /></button>
    </div>
  )
}

export default SidebarBtn