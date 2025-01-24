import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <Container className="notFound">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link replace={true} to="/">
        How about going back to safety?
      </Link>
    </Container>
  );
}
