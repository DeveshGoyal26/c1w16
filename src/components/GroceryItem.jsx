// reusable card component
const GroceryItem = ({ el }) => {
  // console.log(el)
  return (
    <>
      <div className="discount">
        <span>{el.discount}</span>
      </div>
      <div>
        <img src={el.imgURL} alt="" />
      </div>
      <div className="tilte_div">
        <p>{el.title}</p>
      </div>
      <div className="price_div">
        <p>{el.sellingPrice}</p>
        <p>
          MRP : <span>{el.mrp}</span>
        </p>
      </div>
    </>
  );
};
export default GroceryItem;
