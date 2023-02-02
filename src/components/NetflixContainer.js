import NetflixCard from "./NetflixCard";

//The NetflixContainer iterates over the repos array and sends necessary information down to NetflixCard via props

function NetflixContainer({ repos, searchTerm }) {

  return (
    <>
      {repos.map((repo, index) => (
        <NetflixCard
          key={repo.id}
          index={index}
          name={repo.name}
          id={repo.id}
          fork={repo.fork}
          language={repo.language}
          description={repo.description}
          stars={repo.stargazers_count}
          forks={repo.forks}
          date={repo.updated_at}
          commits={repo.git_commits_url}
          searchTerm={searchTerm}
        />
      ))}
    </>
  );
}

export default NetflixContainer;
