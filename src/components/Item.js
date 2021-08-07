import React from "react";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import "./Item.css";

const Item = ({ item, cartItems, dispatch }) => {
  const priceWithComma = "$ " + item.price.toLocaleString() + ".00";

  const handleAddToCart = (item) => {
    if (cartItems.filter((cartItem) => cartItem.id === item.id).length) {
      dispatch({ type: actions.INCREASE_ITEM, payload: { item } });
    } else {
      dispatch({ type: actions.ADD_ITEM, payload: { item } });
    }
  };

  return (
    <div className="item-container">
      <img src={item.image} alt="Not found" width="350px" height="200px"></img>

      <div className="details">
        <p>{item.name}</p>

        <div>{priceWithComma}</div>

        <div className="btn">
          <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return { cartItems: store.cart };
};

export default connect(mapStateToProps)(Item);
