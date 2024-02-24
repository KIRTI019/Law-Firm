import React from 'react'
import './testimonial.css';
import { data } from './data';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>My clients say</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testimonials_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ id, image, title, description }) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                  <h5 className='client_name'>{title}</h5>
                  <p className='client_review'>{description}</p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial