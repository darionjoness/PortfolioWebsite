import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillPhone } from "react-icons/ai";

const Contact = ({ activeTab }) => {
  return (
    <div className={activeTab === 4 ? 'contact active' : 'notActive'}>
        <h1>Contact</h1>
        <div className="contactItems">
            <div className="contactItem">
                <a target={'_blank'} href="https://www.linkedin.com/in/darion-jones-52a001227/"><AiFillLinkedin/></a>
                <p>Darion Jones</p>
            </div>
            <div className="contactItem">
                <a target={'_blank'} href="https://github.com/darionjoness"><AiFillGithub/></a>
                <p>darionjoness</p>
            </div>
            <div className="contactItem">
                <a href="mailto: darionjones2555@gmail.com"><AiOutlineMail/></a>
                <p>darionjones2555@gmail.com</p>
            </div>
            <div className="contactItem">
                <a href="tel:4053342082"><AiFillPhone/></a>
                <p>(405)334-2082</p>
            </div>
        </div>
    </div>
  )
}

export default Contact