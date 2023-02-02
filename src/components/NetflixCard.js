import { useState, useEffect } from "react";
import NetflixCardCommits from "./NetflixCardCommits";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import DownTeal from "../images/down-teal.png";

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
  searchTerm,
}) {
  const [showCommits, setShowCommits] = useState(false);
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${searchTerm}/${name}/commits`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${process.env.REACT_APP_MY_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setCommits(data));
  }, []);

  const toggleCommits = () => {
    setShowCommits(!showCommits);
  };

  return (
    <>
      <Card style={{ width: "30rem" }} className="netflix-card">
        <Card.Body>
          <Card.Header as="h3">{name}</Card.Header>
          <Card.Text>{description}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Stars: {stars}
          </Card.Subtitle>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Language: {language}</ListGroup.Item>
            <ListGroup.Item>Date: {date}</ListGroup.Item>
            <ListGroup.Item>Is forked: {fork.toString()}</ListGroup.Item>
            <ListGroup.Item>Forks: {forks}</ListGroup.Item>
          </ListGroup>
          <div onClick={toggleCommits} className="commits-button">
            Commits <img src={DownTeal} className="down-img" />
          </div>
          {showCommits && !!commits
            ? commits.map((commit) => (
                <NetflixCardCommits
                  key={commit.sha}
                  username={commit.commit.author.name}
                  hash={commit.sha}
                  date={commit.commit.committer.date}
                  message={commit.commit.message}
                />
              ))
            : null}
        </Card.Body>
      </Card>
    </>
  );
}

export default NetflixCard;
