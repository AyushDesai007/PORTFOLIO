import { useState } from 'react'

function Contact() {
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)

  return (
    <main className="content contact-page">
      <section className="card contact-card">
        <div className="contact-header">
          <h3>Contact Me</h3>
          <button className="help-toggle" onClick={() => setShowHelp((prev) => !prev)}>
            {showHelp ? 'Hide help' : 'Show help'}
          </button>
        </div>

        {showHelp && (
          <div className="help-box">
            <p>Type your message below and see the live preview as you type.</p>
          </div>
        )}

        <label htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a short message here"
        />

        <div className="message-info">
          <span>Character count: {message.length}</span>
          <span>{message ? 'Preview:' : 'Message preview will appear here.'}</span>
        </div>

        {message && <p className="message-preview">{message}</p>}
      </section>
    </main>
  )
}

export default Contact
