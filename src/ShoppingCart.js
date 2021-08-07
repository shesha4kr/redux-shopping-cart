import { React } from "react";
import { Header } from "./components/Header";
import { connect } from "react-redux";
import CartItem from "./components/CartItem";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import { actions } from "./redux/actions";

const ShoppingCart = ({ cart, totalItems, totalPrice, dispatch }) => {
  if (!cart.length) {
    return (
      <div>
        <Header displayHome={true} totalItems={totalItems} />

        <div className="shopping-cart">
          <h1>No items present in the cart</h1>
          <Link to="/">
            <button style={{ width: "130px", marginLeft: "80px" }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header displayHome={true} totalItems={totalItems} />

      <div className="shopping-cart">
        <button
          className="clear-cart"
          onClick={() => dispatch({ type: actions.CLEAR_CART })}
        >
          Clear Cart
        </button>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CartItem cartItem={item} />
            </div>
          );
        })}
      </div>
      <div className="subtotal">{`Subtotal ${totalPrice}`}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
