import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "800px",
      }}
    >
      <Form
        style={{
          width: "400px",
          height: "500px",
          background: "#F8F9FA",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h1>Welcome back</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password..." />
        </Form.Group>
        <Form.Group>
          <Link to="www.google.com">
            <Button
              style={{
                background: "#222",
                width: "100%",
                marginBottom: "20px",
                marginTop: "20px",
              }}
              variant="primary"
              type="submit"
            >
              <FontAwesomeIcon icon={faGoogle} />
              Countinue with Google
            </Button>
          </Link>
        </Form.Group>
        <Button
          style={{
            background: "#222",
            width: "100%",
            marginBottom: "10px",
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
