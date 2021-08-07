import React from "react";
import { Header } from "./components/Header";
import { items } from "./AllItems";
import "./HomePage.css";
import Item from "./components/Item";
import { FloatingModal } from "./components/FloatingModal";
import { connect } from "react-redux";

const HomePage = ({ totalItems }) => {
  return (
    <div>
      <Header displayHome={false} totalItems={totalItems} />

      <FloatingModal text={"Flower Pot added"} />

      <div className="all-item-container">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Item item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  console.log("HOME" + store.totalItems);
  return { totalItems: store.totalItems };
};

export default connect(mapStateToProps)(HomePage);
