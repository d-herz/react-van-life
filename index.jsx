import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (    
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <h1>Hello world!</h1>
  )
}

function About() {
  return (
    <h1>About page!</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />); 