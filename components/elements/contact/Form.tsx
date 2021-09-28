import React from 'react'

const Form = () => {
  const contactForm = async (event:any) => {
    event.preventDefault()

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
    console.log(result);
  }

  return (
    <form onSubmit={contactForm} id="main-contact-form">

      <div className="input-wrapper">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="Enter your name" required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" autoComplete="email" placeholder="Enter your email address"required />
      </div>
      <div className="textarea-wrapper">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Hi there James, I really like your work ... "required />
      </div>
      <button type="submit">
        <span className="hover-bg"></span>
        <span> Send Message</span>
        </button>
    </form>
  )
}
export default Form;