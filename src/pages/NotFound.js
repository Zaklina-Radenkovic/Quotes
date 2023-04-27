import { NavLink } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => (
  <>
    <p>Sorry, Page not found!</p>
    <p>
      Return to{" "}
      <NavLink
        to={"/Quotes"}
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <span
          style={{ color: "#008080", fontWeight: "bold", cursor: "pointer" }}
        >
          Quotes
        </span>
      </NavLink>
    </p>
  </>
);
export default NotFound;
