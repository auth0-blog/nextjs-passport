import Container from "react-bootstrap/Container";
import fetch from "isomorphic-fetch";
import Thoughts from "../components/Thoughts";

function Index(props) {
  return (
    <Container>
      <Thoughts thoughts={props.thoughts} />
    </Container>
  );
}

Index.getInitialProps = async ({ req }) => {
  const baseURL = "http://localhost:3000";
  const res = await fetch(`${baseURL}/api/thoughts");
  return {
    thoughts: await res.json()
  };
};

export default Index;
