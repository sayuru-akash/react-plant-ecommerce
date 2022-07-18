import React from 'react'

const Footer = () => {
  return (
    <footer class="text-center text-lg-start bg-light text-muted">
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
        </div>
        <div>
        <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
        </a>
        </div>
    </section>
    <section class="">
        <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <div class=" mb-4">
                <img src="https://i.ibb.co/qjbWXdK/fancy-hut-logo.png" alt="logo" class="nav-logo"/>
            </div>
            <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
            </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
                Products
            </h6>
            <p>
                <a href="#!" class="text-reset">About Us</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Shop</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Blog</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Contact Us</a>
            </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
                Useful links
            </h6>
            <p>
                <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
                <a href="#!" class="text-reset">Help</a>
            </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
                Contact
            </h6>
            <p><i class="fas fa-home me-3"></i> 254/2, Homagama Town, Sri Lanka</p>
            <p>
                <i class="fas fa-envelope me-3"></i>
                fancyhut@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 94 71 245 2345</p>
            <p><i class="fas fa-print me-3"></i> + 94 71 245 2345</p>
            </div>
        </div>
        </div>
    </section>
    <div class="text-center p-4">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/"> Fancy Hut</a>
    </div>
    </footer>
  )
}

export default Footer