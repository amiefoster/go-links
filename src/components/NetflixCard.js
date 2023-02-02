import NetflixCardCommits from "./NetflixCardCommits";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NetflixCard({
  fork,
  id,
  name,
  index,
  language,
  description,
  stars,
  forks,
  date,
  commits,
}) {
  const [showCommits, setShowCommits] = useState(false);

//   useEffect(() => {
//     fetch(`https://api.github.com/repos/${name}/commits`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//       })
//       .then((data) => console.log(data));
//   }, []);

  const toggleCommits = () => {
    setShowCommits(!showCommits);
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className="netflix-card">
        <Card.Body>
          <Card.Title>
            {name} - {id}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Stars: {stars}
          </Card.Subtitle>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{language}</ListGroup.Item>
            <ListGroup.Item>{date}</ListGroup.Item>
            <ListGroup.Item>Is forked: {fork.toString()}</ListGroup.Item>
            <ListGroup.Item>Forks: {forks}</ListGroup.Item>
          </ListGroup>

          <div onClick={toggleCommits} className="commits-button">
            Commits
          </div>
          {showCommits ? <NetflixCardCommits /> : null}
        </Card.Body>
      </Card>
    </>
  );
}

export default NetflixCard;

// When clicking on an item in the list, it should show another list of the recent commits
// ● Each item in this commits list should show:
// ○ Commit Title
// ○ Committer username
// ○ Commit hash
// ○ Date Created
