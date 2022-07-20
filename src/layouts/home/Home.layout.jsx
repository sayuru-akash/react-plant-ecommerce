import React from 'react';
import AboutSection from '../../components/about-section/AboutSection.component';
import BlogSection from '../../components/blog-section/BlogSection.component';
import ProductSection from '../../components/product-section/ProductSection.component';
import Slider from '../../components/slider/Slider.component';
import YoutubeSection from '../../components/youtube-section/YoutubeSection.component';

const Home = () => {
  return (
    <>
      <Slider/>
      <AboutSection/>
      <ProductSection/>
      <YoutubeSection/>
      <BlogSection/>
    </>
  )
}

export default Home
