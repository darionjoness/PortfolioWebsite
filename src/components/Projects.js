import React from 'react'
import disneyPlusRebuild from './img/disneyPlusRebuild.png'
import tipCalcApp from './img/tipCalcApp.png'
import sqFtPriceCalc from './img/sqFtPriceCalc.png'
import volcanoeTracker from './img/volcanoeTracker.png'
import reactToDoList from './img/reactToDoList.png'
import quizApp from './img/quizApp.png'
import emojiSearch from './img/emojiSearch.png'
import monsterMaker from './img/monsterMaker.png'

const Projects = ({ activeTab }) => {
  return (
    <div className={activeTab === 2 ? 'projects active' : 'notActive'}>
      <h1>Javascript Projects</h1>
      <div className="jsProjects">
        <div className="jsProject">
          <img src={disneyPlusRebuild} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://velvety-rabanadas-e52e99.netlify.app/">Disney Plus Rebuild</a>
            <a target={'_blank'} href="https://github.com/darionjoness/DisneyPlus-Rebuild">Github</a> 
          </div>
        </div>
        <div className="jsProject">
          <img src={tipCalcApp} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href='https://zesty-sprite-3fc2c9.netlify.app/'>Tip Calculator App</a>
            <a target={'_blank'} href="https://github.com/darionjoness/TipCalcApp">Github</a>
          </div>
        </div>
        <div className="jsProject">
          <img src={sqFtPriceCalc} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href='https://nimble-biscochitos-2d27cf.netlify.app/'>Square Foot Price Calculator</a>
            <a target={'_blank'} href="https://github.com/darionjoness/SquareFootPriceCalc">Github</a>
          </div>
        </div>
        <div className="jsProject">
          <img src={monsterMaker} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href='https://capable-fox-1f5bec.netlify.app'>Monster Maker</a>
            <a target={'_blank'} href="https://github.com/darionjoness/MonsterMaker">Github</a>
          </div>
        </div>
      </div>

      <h1>React Projects</h1>
      <div className="reactProjects">
        <div className="reactProject">
          <img src={volcanoeTracker} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://fancy-narwhal-2e6a4e.netlify.app">Volcanoe Tracker</a>
            <a target={'_blank'} href="https://github.com/darionjoness/VolcanoeTracker">Github</a>
          </div>
        </div>
        <div className="reactProject">
          <img src={reactToDoList} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://incomparable-cajeta-ee16a6.netlify.app/">To Do List</a>
            <a target={'_blank'} href="https://github.com/darionjoness/ReactToDoList">Github</a>
          </div>
        </div>
        <div className="reactProject">
          <img src={quizApp} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://steady-banoffee-0f730c.netlify.app">Quiz App</a>
            <a target={'_blank'} href="https://github.com/darionjoness/ReactQuiz">Github</a>
          </div>
        </div>
        <div className="reactProject">
          <img src={emojiSearch} alt="" />
          <div className="projectsBtns">
            <a target={'_blank'} href="https://venerable-lollipop-9da6b7.netlify.app">Emoji Search</a>
            <a target={'_blank'} href="https://github.com/darionjoness/EmojiSearch">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects