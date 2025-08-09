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
      if (res.ok) setStatus({ type: 'success', message: data.message || 'Thanks! You’re on the early access list.' })
      else setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
      setEmail('')
    }
  }

  return (
    <div>
      {/* Header */}
      <header style={{position:'sticky', top:0, zIndex:30, backdropFilter:'saturate(180%) blur(8px)', background:'#ffffffcc', borderBottom:'1px solid #e5e7eb'}}>
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'.9rem 1rem'}}>
          <div style={{display:'flex', alignItems:'center', gap:'.6rem'}}>
            <div style={{height:36, width:36, background:'#2563eb', color:'#fff', borderRadius:12, display:'grid', placeItems:'center', boxShadow:'0 1px 2px rgba(0,0,0,.15)'}}>A</div>
            <strong>AI Act Watch</strong>
          </div>
          <nav className="small" style={{display:'flex', gap:'1rem'}}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="container" style={{padding:'4rem 1rem'}}>
          <div className="grid grid-2" style={{alignItems:'center'}}>
            <div>
              <h1 style={{fontSize:'clamp(32px,3vw,44px)', fontWeight:800, letterSpacing:'-0.02em'}}>
                EU AI Act compliance alerts, <span style={{color:'#2563eb'}}>translated to actions</span>
              </h1>
              <p className="small" style={{marginTop:'1rem'}}>
                Daily, plain-English updates on obligations, deadlines, guidance, and enforcement—curated from the European Commission, EUR-Lex, and national regulators.
              </p>
              <ul className="small" style={{marginTop:'1rem', paddingLeft:'1.25rem', listStyle:'disc'}}>
                <li>5-bullet briefs + <strong>urgency tag</strong> (Action / Monitor / FYI)</li>
                <li>Concrete recommendations your team can execute today</li>
                <li>Searchable archive & team sharing (Pro)</li>
              </ul>

              <div id="join" style={{marginTop:'1rem'}}>
                <form onSubmit={handleJoin}>
                  <div style={{display:'flex', gap:'.6rem', flexWrap:'wrap'}}>
                    <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Work email" style={{flex:'1 1 260px', padding:'.9rem 1rem', border:'1px solid #e5e7eb', borderRadius:12}} />
                    <button className="btn" disabled={loading}>{loading ? 'Joining…' : 'Get Early Access'}</button>
                  </div>
                </form>
                {status && <div className={status.type==='success' ? 'success' : 'error'} style={{marginTop:'.75rem'}}>{status.message}</div>}
                <p className="small" style={{marginTop:'.5rem'}}>No spam. Cancel anytime. Contact: <a href="mailto:contact@aiactwatch.com">contact@aiactwatch.com</a></p>
              </div>
            </div>

            {/* Credibility card */}
            <div className="card">
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3>Today’s sample brief</h3>
                <span className="badge">Action Needed</span>
              </div>
              <p className="small" style={{marginTop:'.25rem'}}>{new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}</p>
              <ul className="small" style={{marginTop:'.5rem', paddingLeft:'1.25rem', listStyle:'disc'}}>
                <li>Commission clarifies transparency obligations for general-purpose AI (GPAI).</li>
                <li>Providers must document training data provenance and publish model cards.</li>
                <li>Scope: models made accessible in the EU from 1 Jan 2026.</li>
                <li>Supervisory authorities to begin random checks in Q1 2026.</li>
                <li>Non-compliance: up to 4% of worldwide turnover.</li>
              </ul>
              <div className="card" style={{background:'#eff6ff', borderColor:'#bfdbfe', color:'#1e3a8a', marginTop:'.75rem'}}>
                <strong>Recommendation:</strong> Inventory GPAI usage, assign owners, and update documentation portals now.
              </div>
              <span className="small" style={{display:'inline-block', marginTop:'.75rem'}}>Sources: European Commission, EUR-Lex, national regulators.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{background:'#fff', borderTop:'1px solid #e5e7eb'}}>
        <div className="container" style={{padding:'3rem 1rem'}}>
          <div className="grid" style={{gridTemplateColumns:'1fr', gap:'1rem'}}>
            {[
              {title:'Official Sources Only', desc:'European Commission, EUR-Lex, and national supervisory authorities. Updated daily.'},
              {title:'Action-Ready Briefings', desc:'Each alert ends with a practical recommendation and an urgency tag.'},
              {title:'Team-Ready', desc:'Searchable archive, sharing, and email digests. API for Enterprise.'},
            ].map((f, i) => (
              <div className="card" key={i}>
                <h4 style={{marginBottom:'.25rem'}}>{f.title}</h4>
                <p className="small">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{background:'#f8fafc'}}>
        <div className="container" style={{padding:'3rem 1rem'}}>
          <h3 style={{textAlign:'center', fontSize:'1.5rem', fontWeight:800}}>Simple pricing, serious savings</h3>
          <p className="small" style={{textAlign:'center', marginTop:'.25rem'}}>Start with daily email alerts. Upgrade for team features any time.</p>

          <div className="grid" style={{gridTemplateColumns:'1fr', gap:'1rem', marginTop:'1rem'}}>
            {[
              {name:'Basic', price:'€99 / mo', features:['Daily email alerts','Urgency tags','7-day trial'], cta:'Join Waitlist'},
              {name:'Pro', price:'€199 / mo', features:['Everything in Basic','Web dashboard','Searchable archive','3 seats'], cta:'Join Waitlist'},
              {name:'Enterprise', price:'Custom', features:['Custom filters','Admin controls','API access','SLA'], cta:'Contact Sales'},
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

      {/* FAQ */}
      <section id="faq" style={{background:'#fff', borderTop:'1px solid #e5e7eb'}}>
        <div className="container" style={{padding:'3rem 1rem'}}>
          <h3 style={{textAlign:'center', fontSize:'1.5rem', fontWeight:800}}>FAQ</h3>
          <div className="grid" style={{gridTemplateColumns:'1fr', gap:'1rem', marginTop:'1rem'}}>
            {[
              {q:'Where do you source updates?', a:'European Commission publications, EUR-Lex, and national supervisory authorities.'},
              {q:'How often are alerts sent?', a:'Daily on business days. Urgent items may trigger immediate alerts.'},
              {q:'Can I cancel anytime?', a:'Yes. Plans are month-to-month with one-click cancellation.'},
              {q:'Is my data secure?', a:'We store only your email and billing data (via Stripe). No customer data is scraped or shared.'},
            ].map((item, i)=>(
              <div className="card" key={i}>
                <h4>{item.q}</h4>
                <p className="small" style={{marginTop:'.25rem'}}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{borderTop:'1px solid #e5e7eb', background:'#f8fafc'}}>
        <div className="container" style={{padding:'1.25rem 1rem', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:'.75rem'}}>
          <div className="small">© {new Date().getFullYear()} AI Act Watch. All rights reserved.</div>
          <div className="small" style={{display:'flex', gap:'1rem'}}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="mailto:contact@aiactwatch.com">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
