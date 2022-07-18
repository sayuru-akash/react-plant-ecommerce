import React from 'react'
import './Slider.styles.css'

const Slider = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.ibb.co/Jsw2CmH/prudence-earl-Nw-Bx723-Xa-Hw-unsplash.jpg" class="d-block w-100 slider-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/mq3tgwH/ripon-kumar-saha-q-B7-Wdy-No-S5-A-unsplash.jpg" class="d-block w-100 slider-img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/N95JHz3/thomas-verbruggen-5-A06-OWU6-Wuc-unsplash.jpg" class="d-block w-100 slider-img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider
