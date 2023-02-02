import React from 'react'
import aboutImg from './img/aboutImg.jpeg'

const AboutMe = ({ activeTab }) => {
  return (
    <div className={activeTab === 1 ? 'aboutMe container active' : 'notActive'}>
        <div className="aboutImg">
            <img src={aboutImg} alt="" />
            <div className="bubble bubble-bottom-left">Hello 👋🏼, my name is Darion Jones. Nice to meet you!</div>
        </div>
        <div className="aboutText">
            <h1>About Me</h1>
            <p>Hi, my name is Darion and I'm a 21 year old self taught Frontend Developer from Stillwater Oklahoma! I love to code, I have been coding for about a year now and love it more and more everyday! In my free time when I'm not coding, I like to invest in crypto, watch UFC fights, play basketball, play with my dog and hangout with my family! I am hardworking and love to learn!</p>
        </div>
    </div>
  )
}

export default AboutMe