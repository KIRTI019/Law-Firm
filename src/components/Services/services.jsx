import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <section id='services'>
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Legal Consultation</h3>
          </div>

          <p className='parag'>Our experienced lawyers provide expert legal advice tailored to your specific needs.</p>
        </article>
        {/* END OF Legal Consultation */}
        <article className='service'>
          <div className='service_head'>
            <h3>Litigation Support</h3>
          </div>
          
          <p className='parag'>We offer comprehensive support in handling all aspects of your legal disputes.</p>
        </article>
        {/* END OF Litigation Support */}
        <article className='service'>
          <div className='service_head'>
            <h3>Contract Drafting</h3>
          </div>

          <p className='parag'>Get legally sound contracts drafted by our skilled team to protect your interests.</p>
        </article>
        {/* END OF Contract Drafting */}
      </div>
    </section>
  )
}

export default Services
