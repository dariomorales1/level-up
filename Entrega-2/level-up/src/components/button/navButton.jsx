import { Link } from "react-router-dom";

export function NavButton({ text, to }) {
  return (
    <Link to={to} className="btnAgregar">
      {text}
    </Link>
  );
}