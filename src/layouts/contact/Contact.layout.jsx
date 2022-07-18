import React from 'react'
import ContactForm from '../../components/contact-form/ContactForm.component'
import ContactSection from '../../components/contact-section/ContactSection.component'

const Contact = () => {
  return (
    <div className='row text-start pl-5 pr-5 pb-5'>
        <div className='col-lg-6 col-sm-12'>
            <ContactSection/>
        </div>
        <div className='col-lg-6 col-sm-12'>
            <ContactForm/>
        </div>
    </div>
  )
}

export default Contact