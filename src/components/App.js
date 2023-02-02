import React, { useState, useEffect } from "react";
import Header from "./Header";
import NetflixContainer from "./NetflixContainer";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

function App() {
  const [netflixRepos, setNetflixRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Netflix");
  const [reload, setReload] = useState(false);

  //fetching repos based on search term sent from the search component
  //reload variable is used in the dependency array to rerender when the searchTerm is submitted
  useEffect(() => {
    fetch(`https://api.github.com/orgs/${searchTerm}/repos`)
    // , {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `token ${process.env.REACT_APP_MY_TOKEN}`,
    //   },
    // })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => sortRepos(data));
  }, [reload]);

//function to check if repos have been fetched and if they have, sort them by stars in descending order
  const sortRepos = (obj) => {
    if (!!obj) {
      obj.sort(function (a, b) {
        return b.stargazers_count - a.stargazers_count;
      });
      setNetflixRepos(obj);
    }
  };

  //function to change the organization from default Netflix, to whatever the user searches - toggles the reload variable to trigger rerender in dependency array
  const filterRepos = () => {
    setReload(!reload);
  };

  return (
    <>
      <Header searchTerm={searchTerm}/>
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
