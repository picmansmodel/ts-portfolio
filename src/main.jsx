import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import LetterGlitch from './LetterGlitch';


import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <LetterGlitch
    glitchSpeed={50}
    centerVignette={false}
    outerVignette={false}
    smooth={true}
  /> 

   <App/>

  <BlurText
    text="MIAU!"
    delay={150}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-2xl mb-8"
  />

  </StrictMode>
)
