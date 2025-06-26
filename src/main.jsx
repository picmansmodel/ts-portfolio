import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlurText from "./BlurText";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  

    <BlurText
    text="MIAU!"
    delay={150}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-2xl mb-8"
  />

  </StrictMode>,
)
