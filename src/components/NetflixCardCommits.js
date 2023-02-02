import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

//The NetflixCardCommits component takes all the props sent down from NetflixCard and displays them in cards created using Bootstrap card components

function NetflixCardCommits({ username, hash, date, message }) {
  return (
    <>
      <div className="commits-container">
        <ListGroup variant="flush">
          <Card.Header as="h5">{message}</Card.Header>
          <ListGroup.Item>Committed By: {username}</ListGroup.Item>
          <ListGroup.Item>Commit hash: {hash}</ListGroup.Item>
          <ListGroup.Item>Date Created: {date}</ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default NetflixCardCommits;
