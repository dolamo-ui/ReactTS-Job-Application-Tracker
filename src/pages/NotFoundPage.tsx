
// File: src/pages/NotFoundPage.tsx
import { Link } from "react-router-dom";
import "./NotFoundPage.css"; // Make sure this import path is correct

const NotFoundPage = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 className="heartbeat">404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Return to Landing Page</Link>
    </div>
  );
};

export default NotFoundPage;
