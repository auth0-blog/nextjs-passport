import Card from "react-bootstrap/Card"

export default function Thought({ thought }) {
  return (
    <Card bg="secondary" text="white" style={{ marginTop: "15px" }}>
      <Card.Body>
        <Card.Title>{thought.message}</Card.Title>
        <Card.Text>by {thought.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}
