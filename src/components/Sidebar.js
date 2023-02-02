import React from 'react'
import Button from './Button';
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";

const Sidebar = React.forwardRef(({ activeTab, changeActiveTab, showSidebar, toggleSidebar }, ref) => 
  (
    <div ref={ref} className={showSidebar ? 'sidebar show' : 'sidebar'}>
        <button onClick={toggleSidebar} id='close'></button>
        <h1>Darion Jones</h1>
        <ul className='sidebarListItems'>
            <li className={activeTab === 0 ? 'current' : ''} onClick={() => changeActiveTab(0)}><button><FaHome className='homeIcon' /> Home</button></li>

            <li className={activeTab === 1 ? 'current' : ''} onClick={() => changeActiveTab(1)} ><button href=""><BsFillPersonFill className='aboutIcon' /> About</button></li>

            <li className={activeTab === 2 ? 'current' : ''} onClick={() => changeActiveTab(2)}><button href=""><AiOutlineFile className='projectsIcon' /> Projects</button></li>

            <li className={activeTab === 3 ? 'current' : ''} onClick={() => changeActiveTab(3)}><button href=""><GiSkills className='skillsIcon' /> Skills</button></li>

            <li className={activeTab === 4 ? 'current' : ''} onClick={() => changeActiveTab(4)}><button href=""><RiContactsFill className='contactIcon' /> Contact</button></li>
        </ul>
    </div>
  ))


export default Sidebar