import React from "react";
import "./main.css";

const Home = () => {
  return (
    <>
      <div className="hero pb-3">
        <div className="card bg-dark text-white border-0 mx-3 shadow-lg">
          <img
            className="card-img img-fluid"
            src="./assets/pic.avif"
            alt="Card"
            style={{
              height: "70vh",
              objectFit: "cover",
              filter: "brightness(70%)",
            }}
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center text-center">
            <div className="container">
              <h5
                className="card-title fs-1 fw-bold text-uppercase"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "2px",
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
                }}
              >
                New Season Arrivals
              </h5>
              <p
                className="card-text fs-5 d-none d-sm-block"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  marginTop: "15px",
                  color: "#f1f1f1",
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
                }}
              >
                Discover the latest trends with our new arrivals. Perfectly crafted for
                style and comfort. Upgrade your wardrobe today!
              </p>
              <div className="button-container mt-4">
                <button
                  className="btn btn-light mt-4 px-4 py-2"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderRadius: "25px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.4)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)")
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
