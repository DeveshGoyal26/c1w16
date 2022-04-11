import React from "react";
import data from "../data.json";
import CartButton from "./CartButton";
import GroceryItem from "./GroceryItem";
import './GroceryItem.css'

const GroceryDetails = () => {
  console.log(data);

  return (
    <>
      <h1 className="heading">Groceries</h1>
      <h3 style={{textAlign:"left",padding:"0 10px"}}>TOP DEALS</h3>
      <div className="container">
        {
          /* map through the data and display the cards */
          data.map((el) => (
            // return (
            <div key={el.id}>
              <GroceryItem el={el} />
              <CartButton />
            </div>
            // )
          ))
        }
      </div>
    </>
  );
};
export default GroceryDetails;
