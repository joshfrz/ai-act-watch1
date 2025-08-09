export default function Home() {
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
              <h1 style={{fontSize:'clamp(32px,3vw,44px)', fontWeight:800, letterSpacing:'-0.02em'}}>
                Stay Ahead of <span style={{color:'#2563eb'}}>EU AI Act</span> Compliance
              </h1>
              <p className="small" style={{marginTop:'1rem'}}>
                Daily, plain-English alerts on obligations, deadlines, guidance, and enforcement—curated from official EU sources and national regulators.
              </p>
              <ul className="small" style={{marginTop:'1rem', paddingLeft:'1.25rem', listStyle:'disc'}}>
                <li>5-bullet summaries with an <strong>urgency tag</strong> (Action / Monitor / FYI)</li>
                <li>Searchable archive and team sharing (Pro)</li>
                <li>API & custom filters (Enterprise)</li>
              </ul>

              <div id="join" style={{marginTop:'1rem'}}>
                <form onSubmit={(e)=>e.preventDefault()}>
                  <div style={{display:'flex', gap:'.6rem', flexWrap:'wrap'}}>
                    <input required type="email" placeholder="Work email" style={{flex:'1 1 260px', padding:'.9rem 1rem', border:'1px solid #e5e7eb', borderRadius:12}} />
                    <button className="btn">Get Early Access</button>
                  </div>
                </form>
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
    </div>
  )
}
