import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import SidebarBtn from "./components/SidebarBtn";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useEffect, useState, useRef } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [showSidebar, setShowSidebar] = useState(false)

  // Change active tab state
  const changeActiveTab = (index) => {
    setActiveTab(index)
  }

  // Toggle sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  
  let menuRef = useRef()

  // Remove sidebar when I click in window
  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setShowSidebar(false)
      }
    }

    document.addEventListener('mousedown', handler)
  })

  return (
    <div className="app">
      <SidebarBtn onClick={toggleSidebar} />
      <Home activeTab={activeTab} />
      <Sidebar ref={menuRef} activeTab={activeTab} changeActiveTab={changeActiveTab} showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <AboutMe activeTab={activeTab}/>
      <Projects activeTab={activeTab} />
      <Skills activeTab={activeTab} />
      <Contact activeTab={activeTab} />
    </div>
  );
}

export default App;
