import { Link } from "react-router";

function Navbar({ appliedCount }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          🎓 Campus Placement Drive
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/companies" className="nav-link">
            Companies
          </Link>
          <Link to="/applications" className="nav-link nav-badge-link">
            Applications
            <span className="nav-counter">{appliedCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
