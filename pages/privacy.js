export default function Privacy() {
  return (
    <div className="container" style={{padding:'2rem 1rem'}}>
      <h1 style={{fontSize:'2rem', fontWeight:800}}>Privacy Policy</h1>
      <p className="small" style={{marginTop:'.5rem'}}>Last updated: 08 Aug 2025</p>
      <p className="small" style={{marginTop:'1rem'}}>
        AI Act Watch collects only the information necessary to deliver our service, including your email address and billing details.
        We do not sell or share your personal data with third parties other than service providers (e.g., email delivery, payment processing) who act on our behalf.
      </p>
      <h2 style={{marginTop:'1rem'}}>Data We Collect</h2>
      <ul className="small" style={{paddingLeft:'1.25rem', listStyle:'disc'}}>
        <li>Account data (name, email)</li>
        <li>Billing data (processed by Stripe)</li>
        <li>Product usage (aggregate metrics to improve the service)</li>
      </ul>
      <h2 style={{marginTop:'1rem'}}>Contact</h2>
      <p className="small">Questions? Contact: support@aiactwatch.com</p>
    </div>
  )
}
