import React from 'react'

export default function About(){
  return (
    <div className="container">
      <h2>About</h2>
      <div className="two-col" style={{marginTop:18}}>
        <div>
          <p style={{color:'var(--muted)'}}>Hi, I'm Ankush — a multidisciplinary creative focused on motion graphics, video editing and UI/UX. I build cinematic experiences and visual systems for brands and products. My work blends narrative-driven video with pixel-perfect interfaces.</p>

          <h3 style={{marginTop:18}}>Skills</h3>
          <ul style={{color:'var(--muted)'}}>
            <li>Motion design (After Effects, Cinema4D)</li>
            <li>Video editing & color grading (Premiere, DaVinci Resolve)</li>
            <li>UI/UX, prototyping (Figma)</li>
            <li>3D for motion & web (Blender, three.js)</li>
          </ul>
        </div>
        <aside className="contact-card">
          <h4>Quick Links</h4>
          <p style={{color:'var(--muted)'}}>Portfolio assets and social links are placeholders — replace with your real accounts.</p>
          <p style={{marginTop:12}}><strong>Behance:</strong> placeholder</p>
          <p><strong>Dribbble:</strong> placeholder</p>
          <p><strong>LinkedIn:</strong> placeholder</p>
        </aside>
      </div>
    </div>
  )
}
