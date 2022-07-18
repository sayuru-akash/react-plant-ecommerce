import React from 'react'

const ContactForm = () => {
  return (
    <form className='mb-5 p-5'>
        <div className='mb-5'>
            <h3>SEND US A MESSAGE</h3>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Your Email</label>
            <input type="email" class="form-control" id="email"/>
        </div>
        <div class="mb-3">
            <label for="subject" class="form-label">Your Subject</label>
            <input type="text" class="form-control" id="subject"/>
        </div>
        <div class="mb-3">
            <label for="subject" class="form-label">Your Message</label>
            <textarea rows="5"class="form-control">

            </textarea>
        </div>
        <button type="submit" class="btn btn-success mt-4 w-100">Send</button>
    </form>
  )
}

export default ContactForm