import { React } from "react";
import "./CartItem.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { connect } from "react-redux";
import { actions } from "../redux/actions";

const CartItem = ({ cartItem, dispatch }) => {
  const handleDecrease = () => {
    console.log("decrease called");
    if (cartItem.count === 1) {
      console.log("count is 1");
      dispatch({ type: actions.REMOVE_ITEM, payload: { item: cartItem } });
    } else {
      console.log("count is not 1");
      dispatch({ type: actions.DECREASE_ITEM, payload: { item: cartItem } });
    }
  };

  return (
    <div className="cart-item-container">
      <img src={cartItem.image} alt="Not found" width="150px"></img>
      <div>
        <p className="item-name">{cartItem.name}</p>
        <p className="item-price">{`$ ${cartItem.price}.00/-`}</p>
      </div>

      <div className="control-count">
        <button onClick={() => handleDecrease()}>
          {cartItem.count === 1 ? <RiDeleteBin6Line /> : <FiMinus />}
        </button>
        <button>{cartItem.count}</button>
        <button
          onClick={() =>
            dispatch({
              type: actions.INCREASE_ITEM,
              payload: { item: cartItem },
            })
          }
        >
          <FiPlus />
        </button>
      </div>
      <button
        style={{ width: "100px" }}
        onClick={() =>
          dispatch({ type: actions.REMOVE_ITEM, payload: { item: cartItem } })
        }
      >
        remove
      </button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log("OWNPROPS:" + ownProps.name);
//   return {
//     increase: () =>
//       dispatch({ type: actions.INCREASE_ITEM, payload: { item: ownProps } }),
//   };
// };

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(CartItem);
