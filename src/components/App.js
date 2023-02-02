import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import NetflixContainer from "./NetflixContainer";
import Search from "./Search";

function App() {
  const [netflixRepos, setNetflixRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("netflix");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${searchTerm}/repos`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => checkIfReposLoaded(data));
  }, [reload]);

  const checkIfReposLoaded = (obj) => {
    if (!!obj) {
      //obj.sort(function(a, b){return b.stargazers_count-a.stargazers_count})
      setNetflixRepos(obj);
      console.log(obj);
    }
  };

  const filterRepos = () => {
    setSearchTerm(searchTerm);
    setReload(!reload);
  };

  return (
    <>
      <Header />
      <Search
        filterRepos={filterRepos}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div className="netflix-container">
        <NetflixContainer repos={netflixRepos} />
      </div>
    </>
  );
}

export default App;

// Task: Create a user interface to navigate the repositories and commits in Netflix’s
// Github. As a User, I would like to be able to see a list of Netflix’s repositories, and when I click on a repository, I want to be able to see the list of commits.

// Basic Requirements
// ● Create a scrollable list of Netflix’s repositories: https://api.github.com/orgs/Netflix/repos
//url can change from netflix to hulu or whatever other service there is.
// ● Each item in the repository list should show:
// ○ Repo name
// ○ Language
// ○ Description
// ○ Star Count
// ○ Fork Count
// ○ Date Created
// ● This list should be sorted by Star Count in
// descending order
// ● When clicking on an item in the list, it should show another list of the recent commits
// ● Each item in this commits list should show:
// ○ Commit Title
// ○ Committer username
// ○ Commit hash
// ○ Date Created
// ● Host the application on AWS, Heroku, Digital Ocean, or your own Web Host.
// Bonus Requirement
// ● As a user, I want to be able to type into an input an organization name other than Netflix
// and see a list of that organization’s repositories and commits instead.
// ● Any design additions, UI/UX improvements are always a plus.
