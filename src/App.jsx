import { useState } from 'react'
import './App.css'
import ButtonList from './components/Buttons'
import TwitterIcon from './assets/twitterIcon'
import GithubIcon from './assets/githubIcon'

function App() {
  const navigateToSocial = (social) => {
    const socialMapping = {
      twitter: 'https://twitter.com/_jsnelson_',
      github: 'https://github.com/jaysnel/component-library-react',
    }
    window.open(socialMapping[social], '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <div className='home-page'>
        <h1>Component Library Collection</h1>
        <p>This is a component library with animations built using pure CSS</p>
        <div className='storybook-link'>
        <a href="https://main--6508db59c01ba56d8f28e200.chromatic.com/" target="_blank">View Storybook</a>
        </div>
        <div className='social-icons'>
          <TwitterIcon
          navigationFunction={navigateToSocial}/>
          <GithubIcon 
          navigationFunction={navigateToSocial}/>
        </div>
        {/* <ButtonList /> */}
      </div>
    </>
  )
}

export default App
