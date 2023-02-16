import React from 'react'
import disneyPlusRebuild from './img/disneyPlusRebuild.png'
import tipCalcApp from './img/tipCalcApp.png'
import sqFtPriceCalc from './img/sqFtPriceCalc.png'
import volcanoeTracker from './img/volcanoeTracker.png'
import reactToDoList from './img/reactToDoList.png'
import quizApp from './img/quizApp.png'
import emojiSearch from './img/emojiSearch.png'
import monsterMaker from './img/monsterMaker.png'
import jungleJump from './img/jungleJump.png'
import hulu from './img/hulu.png'

const Projects = ({ activeTab }) => {
  return (
    <div className={activeTab === 2 ? 'projects active' : 'notActive'}>
      <h1>Javascript Projects</h1>
      <div className="jsProjects">
        <div className="jsProject">
          <img src={disneyPlusRebuild} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://disneyplusrebuild.netlify.app">Disney Plus Rebuild</a>
            <a target={'_blank'} href="https://github.com/darionjoness/DisneyPlus-Rebuild">Github</a> 
          </div>
        </div>
        <div className="jsProject">
          <img src={tipCalcApp} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href='https://calctipapp.netlify.app'>Tip Calculator App</a>
            <a target={'_blank'} href="https://github.com/darionjoness/TipCalcApp">Github</a>
          </div>
        </div>
        <div className="jsProject">
          <img src={jungleJump} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href='https://junglejumpp.netlify.app/'>Jungle Jump Game</a>
            <a target={'_blank'} href="https://github.com/darionjoness/JungleJump">Github</a>
          </div>
        </div>
        <div className="jsProject">
          <img src={monsterMaker} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href='https://monstermaker.netlify.app'>Monster Maker</a>
            <a target={'_blank'} href="https://github.com/darionjoness/MonsterMaker">Github</a>
          </div>
        </div>
      </div>

      <h1>React Projects</h1>
      <div className="reactProjects">
        <div className="reactProject">
          <img src={volcanoeTracker} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://volcanoetracker.netlify.app">Volcanoe Tracker</a>
            <a target={'_blank'} href="https://github.com/darionjoness/VolcanoeTracker">Github</a>
          </div>
        </div>
        <div className="reactProject">
          <img src={reactToDoList} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://darionstodo.netlify.app">To Do List</a>
            <a target={'_blank'} href="https://github.com/darionjoness/ReactToDoList">Github</a>
          </div>
        </div>
        <div className="reactProject">
          <img src={hulu} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://darionhulurebuild.netlify.app/">Hulu Rebuild</a>
            <a target={'_blank'} href="https://github.com/darionjoness/HuluRebuild">Github</a>
          </div>
        </div>
        <div className="reactProject">
          <img src={emojiSearch} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://searchemojis.netlify.app">Emoji Search</a>
            <a target={'_blank'} href="https://github.com/darionjoness/EmojiSearch">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects