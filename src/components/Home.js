import React from 'react'

const Home = ({ activeTab }) => {
  return (
    <div className={activeTab === 0 ? 'home active' : 'notActive'}>
        <h1>Darion Jones</h1>
        <h2>Frontend Developer</h2>
    </div>
  )
}

export default Home