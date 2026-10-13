import React from 'react'

const projects = new Array(8).fill(0).map((_,i)=>({
  id:i+1,
  title:`Project ${i+1}`,
  desc:'Branding / Motion / UI • Short description goes here',
  img:'/src/assets/placeholder.svg'
}))

export default function Gallery(){
  return (
    <div className="container">
      <h2 style={{marginBottom:18}}>Selected Projects</h2>
      <div className="gallery-grid">
        {projects.map(p => (
          <article key={p.id} className="card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
