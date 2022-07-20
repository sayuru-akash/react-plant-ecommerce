import {React,Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import AboutSection from '../../components/about-section/AboutSection.component'
import BlogSection from '../../components/blog-section/BlogSection.component'
import ProductSection from '../../components/product-section/ProductSection.component'
import Slider from '../../components/slider/Slider.component'
import YoutubeSection from '../../components/youtube-section/YoutubeSection.component'

const Home = () => {
  return (
    <Fragment>
    <Outlet/>
      <Slider/>
      <AboutSection/>
      <ProductSection/>
      <YoutubeSection/>
      <BlogSection/>
    </Fragment>
  )
}

export default Home
