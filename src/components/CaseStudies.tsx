import React from 'react'

const cases = [
  {id:1,title:'Brand Identity for Aurora',summary:'Full brand, motion idents and web UI',img:'/src/assets/placeholder.svg'},
  {id:2,title:'Motion EP Trailer',summary:'Cinematic trailer edit and color grading',img:'/src/assets/placeholder.svg'}
]

export default function CaseStudies(){
  return (
    <div className="container">
      <h2 style={{marginBottom:18}}>Case Studies</h2>
      <div className="case-grid">
        {cases.map(c=> (
          <div key={c.id} className="case-item card">
            <div className="case-media"><img src={c.img} alt={c.title} /></div>
            <div className="case-desc">
              <h3>{c.title}</h3>
              <p style={{color:'var(--muted)'}}>{c.summary}</p>
              <p style={{marginTop:10}}>Role: Lead Designer. Tools: After Effects, Premiere, Figma, Blender.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
