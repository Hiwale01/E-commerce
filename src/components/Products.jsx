import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Zoom } from "react-awesome-reveal";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const componentMounted = useRef(true);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted.current) {
        const fetchedData = await response.clone().json();
        setData(fetchedData);
        setFilter(fetchedData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div style={styles.filterContainer}>
          <button
            className="btn btn-outline-dark"
            onClick={() => setFilter(data)}
            style={styles.filterButton}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("men's clothing")}
            style={styles.filterButton}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("women's clothing")}
            style={styles.filterButton}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("jewelery")}
            style={styles.filterButton}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("electronics")}
            style={styles.filterButton}
          >
            Electronics
          </button>
        </div>

        <div style={styles.productContainer}>
          {filter.map((product) => {
            return (
              <Zoom key={product.id}>
                <div
                  style={styles.productCard}
                  className="product-card"
                  onMouseEnter={(e) =>
                    e.currentTarget.classList.add("hover-effect")
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.classList.remove("hover-effect")
                  }
                >
                  <img
                    src={product.image}
                    alt="Card"
                    style={styles.productImage}
                  />
                  <h5
                    className="card-title text-truncate"
                    style={styles.title}
                    title={product.title}
                  >
                    {product.title}
                  </h5>
                  <p className="text-muted" style={styles.description}>
                    {product.description.substring(0, 50)}...
                  </p>
                  <h6 style={styles.price}>$ {product.price}</h6>
                  <div>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-dark"
                      style={styles.actionButton}
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark"
                      style={styles.actionButton}
                      onClick={() => {
                        toast.success("Added to cart");
                        addProduct(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr className="w-25 mx-auto" />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

const styles = {
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  filterButton: {
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  productCard: {
    width: "250px",
    height: "400px", // Fixed height
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  productImage: {
    width: "100%", // Ensures the image fits the width of the box
    height: "200px", // Fixed height
    objectFit: "contain", // Ensures the image scales properly within the box
    marginBottom: "10px",
  },

  title: {
    fontSize: "16px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    fontSize: "12px",
    color: "#666",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  actionButton: {
    margin: "5px",
    fontSize: "14px",
  },
  
};

export default Products;
