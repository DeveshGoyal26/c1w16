import React from "react";

// keep the add to cart component here
const CartButton = () => {
  //manage state of the count
  let [count, setcount] = React.useState(0);

  let counter = (e) => {
    // console.log(event)
    if (e.target.name === "plus") {
      setcount(count + 1);
    } else if (e.target.name === "minus" && count > 0) {
      setcount(count - 1);
    }
  };

  return (
    <>
      {/* add to cart button */}
      {/* count with - and  + button */}
      <div style={{ position: "relative", top: "40px" }}>
        {count ? (
          <div
            style={{
              display: "flex",
              marginLeft: "80px",
              justifyContent: "flex-end",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundImage:
                  "https://www.jiomart.com/assets/version1649101673/smartweb/images/icons/plus-bluecolor.svg",
              }}
              className="plus-minus"
              name="minus"
              onClick={counter}
            >
              -
            </button>
            <p className="count-item">{count}</p>
            <button className="plus-minus" name="plus" onClick={counter}>
              +
            </button>
          </div>
        ) : (
          <button className="Addtocart" name="plus" onClick={counter}>
            Add To Cart
          </button>
        )}
      </div>
    </>
  );
};
export default CartButton;
