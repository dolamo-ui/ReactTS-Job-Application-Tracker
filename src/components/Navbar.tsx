import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the <Link> from navigating
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 10px", textDecoration: "none", color: "black" }}>
        <FontAwesomeIcon icon={faHome} style={{ marginRight: "5px" }} />
        Home
      </Link>

      <Link to="/add-job" style={{ margin: "0 10px", textDecoration: "none", color: "black" }}>
        <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: "5px" }} />
        Add Job
      </Link>

      <Link
        to="/logout"
        onClick={handleLogout}
        style={{ margin: "0 10px", textDecoration: "none", color: "black" }}
      >
        <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "5px" }} />
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
