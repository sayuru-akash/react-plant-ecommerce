import React from 'react'

const ContactForm = () => {
  return (
    <form className='mb-5 p-5'>
        <div className='mb-5'>
            <h3>SEND US A MESSAGE</h3>
        </div>
        <div className="mb-3">
            <label for="name" className="form-label">Your Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label for="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email"/>
        </div>
        <div className="mb-3">
            <label for="subject" className="form-label">Your Subject</label>
            <input type="text" className="form-control" id="subject"/>
        </div>
        <div className="mb-3">
            <label for="subject" className="form-label">Your Message</label>
            <textarea rows="5"className="form-control">

            </textarea>
        </div>
        <button type="submit" className="btn btn-success mt-4 w-100">Send</button>
    </form>
  )
}

export default ContactForm