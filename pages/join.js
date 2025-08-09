export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { email } = req.body || {}
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const listId = process.env.MAILCHIMP_AUDIENCE_ID

  if (!apiKey || !listId) {
    console.log('[join] Dev mode capture:', email)
    return res.status(200).json({ ok: true, message: 'Thanks! You are on the early access list (dev mode). Admin: set MAILCHIMP_* env vars to enable live capture.' })
  }

  try {
    const dc = apiKey.split('-').pop()
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `apikey ${apiKey}`
      },
      body: JSON.stringify({ email_address: email, status: 'subscribed' })
    })
    const data = await resp.json()
    if (resp.status === 200 || resp.status === 201) {
      return res.status(200).json({ ok: true, message: 'Thanks! You are on the early access list.' })
    } else if (resp.status === 400 && data?.title === 'Member Exists') {
      return res.status(200).json({ ok: true, message: 'You are already on the list.' })
    } else {
      console.error('[Mailchimp error]', resp.status, data)
      return res.status(500).json({ error: 'Could not add to list. Please try again later.' })
    }
  } catch (e) {
    console.error('[join] Exception', e)
    return res.status(500).json({ error: 'Server error. Please try again later.' })
  }
}
