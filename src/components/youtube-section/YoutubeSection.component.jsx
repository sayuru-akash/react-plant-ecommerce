import React from 'react'

const YoutubeSection = () => {
  return (
    <div className='row justify-content-center'>
        <div className='container'>
            <h1>Lorem Ipsum is simply dummy text</h1>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-sm-12'>
                <div class="ratio ratio-16x9 m-lg-5 m-sm-2">
                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
                <div class="ratio ratio-16x9 m-lg-5 m-sm-2">
                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YoutubeSection