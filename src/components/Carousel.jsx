import React from 'react'
import banner1 from "../assets/PICTURES/banner1.webp"
import banner2 from "../assets/PICTURES/banner2.webp"
import banner3 from "../assets/PICTURES/banner3.webp"
import banner4 from "../assets/PICTURES/banner4.webp"
import banner5 from "../assets/PICTURES/banner5.webp"

const Carousel = () => {
  return (
    <div>
      <div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
  <li data-target="#demo" data-slide-to="3"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={banner1} alt="Flat_Sale" width="1100" height="500"/>
  </div>
  <div class="carousel-item">
    <img src={banner2} alt="Shoes" width="1100" height="500"/>
  </div>
  <div class="carousel-item">
    <img src={banner3} alt="Phones" width="1100" height="500"/>
  </div>
  <div class="carousel-item">
    <img src={banner4} alt="Cloths" width="1100" height="500"/>
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
    </div>
  )
}

export default Carousel
