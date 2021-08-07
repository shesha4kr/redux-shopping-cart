import { actions } from "./actions";
import { initialState } from "./initialState";

export const reducer = (state, action) => {
  // ADD ITEM
  if (action.type === actions.ADD_ITEM) {
    console.log("ADD_ITEM");
    let itemToBeAdded = action.payload.item;
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          ...itemToBeAdded,
          count: 1,
        },
      ],
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + itemToBeAdded.price,
    };
  }

  //Clear the Cart
  else if (action.type === actions.CLEAR_CART) {
    return initialState;
  }

  //Increase Count of a Particular Item
  else if (action.type === actions.INCREASE_ITEM) {
    console.log("INCREASE_ITEM");

    let itemToModify = action.payload.item;
    let oldCart = state.cart;

    //increase the count for a particular item
    oldCart.map((item) => {
      if (item.id === itemToModify.id) {
        item.count = item.count + 1;
        return item;
      }
      return item;
    });

    //return new state after increasing count
    return {
      ...state,
      totalPrice: state.totalPrice + itemToModify.price,
      cart: oldCart,
      totalItems: state.totalItems + 1,
    };
  }

  //Decrease Count of a Particular Item
  else if (action.type === actions.DECREASE_ITEM) {
    console.log("DECREASE_ITEM");

    //Check if count of an item is 1 or not. If its 1, we have to delete that item else just decrease the count
    let itemToModify = action.payload.item;
    let oldcart = state.cart;
    oldcart.map((item) => {
      if (item.id === itemToModify.id) {
        item.count = item.count - 1;
        return item;
      } else {
        return item;
      }
    });

    return {
      ...state,
      totalPrice: state.totalPrice - itemToModify.price,
      cart: oldcart,
      totalItems: state.totalItems - 1,
    };
  }

  //Remove an Item from Cart
  else if (action.type === actions.REMOVE_ITEM) {
    const itemToBeRemoved = action.payload.item;

    let newCart = state.cart.filter((item) => item.id !== itemToBeRemoved.id);

    return {
      ...state,
      cart: newCart,
      totalItems: state.totalItems - itemToBeRemoved.count,
      totalPrice:
        state.totalPrice - itemToBeRemoved.count * itemToBeRemoved.price,
    };
  }

  //Hide the Floating Modal
  else if (action.type === actions.HIDE_MODAL) {
    return { ...state, showFloatingModal: false };
  }

  //If Dispatched Action does match with any of the action then return state as it is, else state value will be lost
  console.log("Action Not Found");
  return state;
};
