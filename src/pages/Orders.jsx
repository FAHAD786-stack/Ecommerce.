import { useEffect, useState } from "react";
import API from "../api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders/myorders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>

      {orders.length === 0 && <p>No orders found</p>}

      {orders.map((order) => (
        <div key={order._id} className="card mb-3 p-3">
          <p>
            <b>Status:</b> {order.status}
          </p>
          <p>
            <b>Total:</b> ₹{order.totalPrice}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
