import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">E-Commerce</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
