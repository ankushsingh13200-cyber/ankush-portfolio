import React from 'react'

export default function Nav(){
  return (
    <header className="header-nav">
      <div className="nav-left">
        <div className="logo-pill">
          <div style={{width:40,height:40,background:'linear-gradient(135deg,#9aff44,#2df6d6)',borderRadius:8}} />
          <div className="brand">Ankush</div>
        </div>
      </div>
      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
