import React from 'react'

const services = [
  {id:1,title:'Motion Design',desc:'High-end motion graphics and 3D animation for promos and idents.'},
  {id:2,title:'Video Editing',desc:'Cinematic cutting, pacing and color grading for trailers and ads.'},
  {id:3,title:'UI/UX',desc:'Design systems, prototypes and interactions for web and mobile.'}
]

export default function Services(){
  return (
    <div className="container">
      <h2>Services</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:18,marginTop:18}}>
        {services.map(s=> (
          <div key={s.id} className="card">
            <h3>{s.title}</h3>
            <p style={{color:'var(--muted)'}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
