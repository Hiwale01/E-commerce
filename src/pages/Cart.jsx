import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const calculateSummary = (items) => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    const totalItems = items.reduce((acc, item) => acc + item.qty, 0);
    return { subtotal, totalItems };
  };

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCart = () => {
    const { subtotal, totalItems } = calculateSummary(state);
    const shipping = 30.0;

    return (
      <section className="cart-container">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4 cart-item-card">
              <div className="card-header">
                <h5>Item List</h5>
              </div>
              <div className="card-body">
                {state.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-3 col-12">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid cart-item-img"
                        />
                      </div>

                      <div className="col-lg-6 col-md-6 col-12">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p className="cart-item-desc">{item.description}</p>
                      </div>

                      <div className="col-lg-3 col-md-3 col-12">
                        <div className="d-flex justify-content-between">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => removeItem(item)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <span className="quantity-text">{item.qty}</span>

                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => addItem(item)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="cart-item-price">${(item.qty * item.price).toFixed(2)}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header text-light">
                <h5>Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    Products ({totalItems})
                    <span>${subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Shipping
                    <span>${shipping.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>${(subtotal + shipping).toFixed(2)}</strong>
                  </li>
                </ul>

                <Link to="/checkout" className="btn btn-dark btn-lg btn-block mt-3">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1 className="text-center text-light">Your Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
