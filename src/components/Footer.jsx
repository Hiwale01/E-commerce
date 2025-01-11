import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white"
        style={{
          backgroundColor: "#333",
          padding: "20px 0",
          fontSize: "16px",
        }}
      >
        <div className="container">
          <p className="mb-3">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/Hiwale01"
              className="text-decoration-none"
              style={{
                color: "#ffdd57",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              target="_blank"
              rel="noreferrer"
            >
              Ayush Hiwale
            </a>
          </p>
          <a
            href="https://github.com/Hiwale01"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "white",
              fontSize: "24px",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <i className="fa fa-github"></i>
          </a>
          <p className="mt-3 mb-0" style={{ fontSize: "14px", color: "#ccc" }}>
            © {new Date().getFullYear()} Ayush Hiwale. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
