import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import About from './About.jsx';
import Projects from './Projects.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
