import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none", color: "#323232" }} to="/">
              CHAT-BOT
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#323232" }}
                  to="/chat"
                >
                  Chat
                </Link>
              </Nav.Link>

              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "#323232" }}
                    to="/"
                  >
                    Another action
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "#323232" }}
                    to="/"
                  >
                    Something
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none", color: "#323232" }}
                    to="/"
                  >
                    Separated link
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Collapse>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "#323232" }}
                    to="/Signin"
                  >
                    Sign In
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "#323232" }}
                    to="/Signup"
                  >
                    Sign Up
                  </Link>
                </Nav.Link>
              </Navbar.Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
