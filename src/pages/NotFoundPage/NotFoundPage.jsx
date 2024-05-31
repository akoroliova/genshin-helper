import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h3>Oops! Page not found! Sorry!</h3>
      <p>
        Please visit our <Link to="/">home page</Link>
      </p>
    </div>
  );
}
