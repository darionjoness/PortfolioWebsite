import React from 'react'

const Skills = ({ activeTab }) => {
  return (
    <div className={activeTab === 3 ? 'skills active' : 'notActive'}>
        <h1>Skills</h1>
        <div className="skillItems">
            <div className="skillItem">
                <h2>HTML</h2>
            </div>
            <div className="skillItem">
                <h2>CSS</h2>
            </div>
            <div className="skillItem">
                <h2>Javascript</h2>
            </div>
            <div className="skillItem">
                <h2>React</h2>
            </div>
            <div className="skillItem">
                <h2>Git</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills