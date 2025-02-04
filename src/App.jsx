
import discord from './assets/discord-logo-white.png';
import menu from './assets/menu-icon.png';
import jj from './assets/jj.png';
import './App.css'

function App() {


  return (
    <> 
    <div className='nav-bar'>  
      <img src={discord} alt="discord-logo-white" />
       <img src={menu} alt="menu-icon" />
     
    </div>

    <div> <h1>Imagen a place...</h1></div>
    <div><h2>...where you can belong to a school club, a gaming group, or a 
      worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2></div>
    <div className='gridContainer'>
      <div className='leftSide'>
        <button className='button1'>Download for Mac</button>
        <button className='button2'>Open Discord in your browser</button>
      </div>
      <div className='rightSide'> 
          <img className='jj' src= {jj} alt="jjPicture" />
      </div>
      
    

    </div>
      
    </>
  )
}

export default App
