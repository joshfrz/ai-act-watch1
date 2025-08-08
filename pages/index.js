
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleJoin(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (res.ok) setStatus({ type:'success', message: data.message || 'Thanks! You are on the early access list.' })
      else setStatus({ type:'error', message: data.error || 'Something went wrong. Please try again.' })
    } catch (err) {
      setStatus({ type:'error', message: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
      setEmail('')
    }
  }

  return (
    <div>
      <header style={{position:'sticky', top:0, zIndex:30, backdropFilter:'saturate(180%) blur(8px)', background:'#ffffffcc', borderBottom:'1px solid #e5e7eb'}}>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'.9rem 1rem'}}>
          <div style={{display:'flex', alignItems:'center', gap:'.6rem'}}>
            <div style={{height:36, width:36, background:'#2563eb', color:'#fff', borderRadius:12, display:'grid', placeItems:'center', boxShadow:'0 1px 2px rgba(0,0,0,.15)'}}>A</div>
            <strong>AI Act Watch</strong>
          </div>
          <nav className="small" style={{display:'flex', gap:'1rem'}}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </header>

      <section>
        <div className="container" style={{padding:'4rem 1rem'}}>
          <div className="grid grid-2" style={{alignItems:'center'}}>
            <div>
              <h1 style={{fontSize:'clamp(32px,3vw,44px)', fontWeight:800, letterSpacing:'-0.02em'}}>Stay Ahead of <span style={{color:'#2563eb'}}>EU AI Act</span> Compliance</h1>
              <p className="small" style={{marginTop:'1rem'}}>
                Daily, plain-English alerts on obligations, deadlines, guidance, and enforcement—curated from official EU sources and national regulators.
              </p>
              <ul className="small" style={{marginTop:'1rem', paddingLeft:'1.25rem', listStyle:'disc'}}>
                <li>5-bullet summaries with an <strong>urgency tag</strong> (Action / Monitor / FYI)</li>
                <li>Searchable archive and team sharing (Pro)</li>
                <li>API & custom filters (Enterprise)</li>
              </ul>

              <div id="join" style={{marginTop:'1rem'}}>
                <form onSubmit={handleJoin}>
                  <div style={{display:'flex', gap:'.6rem', flexWrap:'wrap'}}>
                    <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Work email" style={{flex:'1 1 260px', padding:'.9rem 1rem', border:'1px solid #e5e7eb', borderRadius:12}} />
                    <button className="btn" disabled={loading}>{loading ? 'Joining…' : 'Get Early Access'}</button>
                  </div>
                </form>
                {status && <div className={status.type==='success' ? 'success' : 'error'} style={{marginTop:'.75rem'}}>{status.message}</div>}
                <p className="small" style={{marginTop:'.5rem'}}>No spam. Cancel anytime.</p>
              </div>
            </div>

            <div className="card">
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3>Sample Daily Alert</h3>
                <span className="badge">Action Needed</span>
              </div>
              <p className="small" style={{marginTop:'.25rem'}}>08 Aug 2025</p>
              <ul className="small" style={{marginTop:'.5rem', paddingLeft:'1.25rem', listStyle:'disc'}}>
                <li>Commission clarifies transparency obligations for general-purpose models (GPAI).</li>
                <li>Providers must document training data provenance and publish model cards.</li>
                <li>Applies to models accessible in the EU starting 1 Jan 2026.</li>
                <li>Supervisory authorities to begin random checks in Q1 2026.</li>
                <li>Non-compliance: up to 4% of worldwide turnover.</li>
              </ul>
              <div className="card" style={{background:'#eff6ff', borderColor:'#bfdbfe', color:'#1e3a8a', marginTop:'.75rem'}}>
                <strong>Recommendation:</strong> Inventory GPAI usage, assign owners, and update documentation portals now.
              </div>
              <a href="#" className="small" style={{display:'inline-block', marginTop:'.75rem'}}>Read full guidance →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" style={{background:'#fff', borderTop:'1px solid #e5e7eb'}}>
        <div className="container" style={{padding:'3rem 1rem'}}>
          <div className="grid" style={{gridTemplateColumns:'1fr', gap:'1rem'}}>
            {[
              {title:'Official Sources Only', desc:'European Commission, EUR‑Lex, and national regulators. Fresh daily.'},
              {title:'Action‑Ready', desc:'Each alert includes a clear recommendation so teams know what to do.'},
              {title:'Searchable Archive', desc:'Find past updates by keyword, date, or urgency tag.'},
            ].map((f, i) => (
              <div className="card" key={i}>
                <h4 style={{marginBottom:'.25rem'}}>{f.title}</h4>
                <p className="small">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" style={{background:'#f8fafc'}}>
        <div className="container" style={{padding:'3rem 1rem'}}>
          <h3 style={{textAlign:'center', fontSize:'1.5rem', fontWeight:800'}}>Simple pricing, serious savings</h3>
          <p className="small" style={{textAlign:'center', marginTop:'.25rem'}}>Start with daily email alerts. Upgrade for team features any time.</p>

          <div className="grid" style={{gridTemplateColumns:'1fr', gap:'1rem', marginTop:'1rem'}}>
            {[
              {name:'Basic', price:'€99/mo', features:['Daily email alerts','Urgency tags','7‑day trial'], cta:'Join Waitlist'},
              {name:'Pro', price:'€199/mo', features:['Everything in Basic','Web dashboard','Searchable archive','Team seats (3)'], cta:'Join Waitlist'},
              {name:'Enterprise', price:'€499/mo', features:['Custom filters','Admin controls','API access','SLA'], cta:'Contact Sales'},
            ].map((p, i) => (
              <div className="card" key={i}>
                <h4 style={{marginBottom:'.25rem'}}>{p.name}</h4>
                <div style={{fontSize:'2rem', fontWeight:900}}>{p.price}</div>
                <ul className="small" style={{marginTop:'.5rem', paddingLeft:'1.25rem', listStyle:'disc'}}>
                  {p.features.map((x, idx) => <li key={idx}>{x}</li>)}
                </ul>
                <a href="#join" className="btn" style={{marginTop:'.75rem', display:'inline-block'}}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{borderTop:'1px solid #e5e7eb', background:'#f8fafc'}}>
        <div className="container" style={{padding:'1.25rem 1rem', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'.75rem'}}>
          <div className="small">© {new Date().getFullYear()} AI Act Watch. All rights reserved.</div>
          <div className="small links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="#join">Get Early Access</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
