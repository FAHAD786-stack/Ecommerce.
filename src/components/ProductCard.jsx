function ProductCard({ product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div className="col-md-3">
      <div className="card mb-3">
        <div className="card-body">
          <h5>{product.name}</h5>
          <p>₹{product.price}</p>
          <button className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
