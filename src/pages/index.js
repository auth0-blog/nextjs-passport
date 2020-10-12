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
  const res = await fetch(`${process.env.BASE_URL}/api/thoughts");
  return {
    thoughts: await res.json()
  };
};

export default Index;
