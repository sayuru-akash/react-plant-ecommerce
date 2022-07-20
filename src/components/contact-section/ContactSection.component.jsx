import React from 'react'

const ContactSection = () => {
  return (
    <div className='p-5'>
    <div className='row'>
    <div className='mb-4'>
            <h1>Contact Us</h1>
        </div>
        <div className='mb-5'>
        <p><i className="fas fa-home me-3"></i> 254/2, Homagama Town, Sri Lanka</p>
            <p>
                <i className="fas fa-envelope me-3"></i>
                fancyhut@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> + 94 71 245 2345</p>
            <p><i className="fas fa-print me-3"></i> + 94 71 245 2345</p>
        </div>
        
    </div>
    <div className='row '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.09744134515!2d80.2321297604863!3d7.292073005769458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31856ea103443%3A0x382b030f6db603d3!2sAlawwa!5e0!3m2!1sen!2slk!4v1658142675968!5m2!1sen!2slk" width="400" height="300" loading="lazy"></iframe>
    </div>
    </div>
  )
}

export default ContactSection
