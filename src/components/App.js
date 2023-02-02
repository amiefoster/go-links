import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import NetflixContainer from "./NetflixContainer";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [netflixRepos, setNetflixRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("netflix");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${searchTerm}/repos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //Authorization: `token ${process.env.REACT_APP_MY_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => checkIfReposLoaded(data));
  }, [reload]);

  const checkIfReposLoaded = (obj) => {
    if (!!obj) {
      obj.sort(function (a, b) {
        return b.stargazers_count - a.stargazers_count;
      });
      setNetflixRepos(obj);
    }
  };

  const filterRepos = () => {
    setSearchTerm(searchTerm);
    setReload(!reload);
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={5}>
            <Search
              filterRepos={filterRepos}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
          </Col>
        </Row>
      </Container>
      <div className="netflix-container">
        <NetflixContainer repos={netflixRepos} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
