import Form from "react-bootstrap/Form";
import Router from "next/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const { useState } = require("react");

export default function ShareThought() {
  const [message, setMessage] = useState("");

  async function submit(event) {
    event.preventDefault();
    await fetch("/api/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });
    Router.push("/");
  }

  return (
    <Container>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>What is in your mind?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Say something"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Share
        </Button>
      </Form>
    </Container>
  );
}
