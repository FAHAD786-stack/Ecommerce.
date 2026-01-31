import { useEffect, useState } from "react";
import API from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Products</h2>

      <div className="row">
        {products.map((p) => (
          <div key={p._id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>{p.description}</p>
                <p>₹{p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
