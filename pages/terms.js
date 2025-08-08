export default function Terms() {
  return (
    <div className="container" style={{padding:'2rem 1rem'}}>
      <h1 style={{fontSize:'2rem', fontWeight:800}}>Terms of Service</h1>
      <p className="small" style={{marginTop:'.5rem'}}>Last updated: 08 Aug 2025</p>
      <p className="small" style={{marginTop:'1rem'}}>
        By using AI Act Watch, you agree to these terms. Subscriptions are billed monthly and may be cancelled at any time.
        Service is provided “as is” without warranties of any kind. We may update these terms and will notify you of material changes.
      </p>
      <h2 style={{marginTop:'1rem'}}>Subscriptions</h2>
      <ul className="small" style={{paddingLeft:'1.25rem', listStyle:'disc'}}>
        <li>Monthly plans renew automatically until cancelled.</li>
        <li>Payments are processed by Stripe.</li>
        <li>Refunds are handled on a case-by-case basis for technical issues.</li>
      </ul>
      <h2 style={{marginTop:'1rem'}}>Acceptable Use</h2>
      <ul className="small" style={{paddingLeft:'1.25rem', listStyle:'disc'}}>
        <li>No scraping or reselling of our content without consent.</li>
        <li>Do not attempt to bypass access controls.</li>
      </ul>
      <h2 style={{marginTop:'1rem'}}>Contact</h2>
      <p className="small">support@aiactwatch.com</p>
    </div>
  )
}
