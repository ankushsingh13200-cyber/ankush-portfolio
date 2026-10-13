import React, {useState} from 'react'

export default function Contact(){
  const [state,setState] = useState({name:'',email:'',message:''})
  return (
    <div className="container">
      <h2>Contact</h2>
      <div className="two-col" style={{marginTop:18}}>
        <form className="contact-card" onSubmit={(e)=>{e.preventDefault();alert('This form is a placeholder — wire up your backend or use a form service.')}}>
          <label style={{display:'block',marginBottom:8}}>Name</label>
          <input value={state.name} onChange={e=>setState(s=>({...s,name:e.target.value}))} style={{width:'100%',padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}} />
          <label style={{display:'block',margin:'12px 0 8px'}}>Email</label>
          <input value={state.email} onChange={e=>setState(s=>({...s,email:e.target.value}))} style={{width:'100%',padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}} />
          <label style={{display:'block',margin:'12px 0 8px'}}>Message</label>
          <textarea value={state.message} onChange={e=>setState(s=>({...s,message:e.target.value}))} style={{width:'100%',padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit',minHeight:140}} />
          <div style={{marginTop:12}}>
            <button className="hero-cta" type="submit">Send Message</button>
          </div>
        </form>

        <aside>
          <div className="card">
            <h4>Contact Info</h4>
            <p style={{color:'var(--muted)'}}>Email: <em>replace@domain.com</em></p>
            <p style={{color:'var(--muted)'}}>Phone: +91-XXXXXXXXXX</p>
            <p style={{color:'var(--muted)',marginTop:12}}>Socials: placeholders. Replace with actual profile links in About.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
