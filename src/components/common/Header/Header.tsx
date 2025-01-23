import styles from "./styles.module.css";

import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default function Header() {
  return (
    <header>
      <div>
        <h1>
          <span>our</span> <Badge bg="info">Ecom</Badge>
        </h1>
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
