import React from 'react'

const AboutSection = () => {
  return (
    <div className='row'>
        <div className='col-lg-6 col-sm-12 mr-1'>
            <img src="..." class="img-fluid" alt="..."/>
        </div>
        <div className='col-lg-6 col-sm-10'>
            <div className='row justify-content-center m-3'>
                <h1>Lorem Ipsum is simply dummy text</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has</p>
            </div>
            <div className='row justify-content-center mt-4'>
                <button type="button" class="btn btn-outline-success w-75">ABOUT US</button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection