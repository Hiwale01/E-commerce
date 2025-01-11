import React from 'react'
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-5">
        <h1 className="text-center text-primary">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to our eCommerce platform, designed and developed by Ayush Hiwale.
          This project was built using ReactJS, showcasing the power of modern web technologies to deliver a seamless shopping experience.
          The platform features user-friendly navigation, responsive design, and a sleek UI to offer a wide variety of products. Whether you’re browsing for Men’s and Women’s Clothing, Jewelry, or Electronics, our goal is to provide a dynamic and engaging shopping experience.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-lg rounded">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens Clothing" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-lg rounded">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Womens Clothing" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-lg rounded">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100 shadow-lg rounded">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center text-warning">About Me</h2>
        <p className="lead text-center">
          Hello! I'm Ayush Hiwale, a computer science student at Rajiv Gandhi Institute of Technology in Mumbai. I am deeply passionate about technology and development, always striving to learn and innovate. As the president of the DMX (DataMatrix) Club at my college, I lead a team of talented developers, and I’m constantly exploring new ways to make a positive impact with technology. This eCommerce project is just one example of my dedication to learning, improving, and creating amazing solutions for real-world problems.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage;
