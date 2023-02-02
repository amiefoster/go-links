import NetflixCard from "./NetflixCard";

function NetflixContainer({ repos }) {
  // ○ Repo name - Which name? full_name??
  // ○ Language //
  // ○ Description //
  // ○ Star Count - Is this stargazers count?
  // ○ Fork Count
  // ○ Date Created - updated_at?
  // This list should be sorted by Star Count in descending order

  return (
    <>
      {repos.map((repo, index) => (
        <NetflixCard
          key={repo.id}
          index={index}
          name={repo.full_name}
          id={repo.id}
          fork={repo.fork}
          language={repo.language}
          description={repo.description}
          stars={repo.stargazers_count}
          forks={repo.forks}
          date={repo.updated_at}
          commits={repo.git_commits_url}
        />
      ))}
    </>
  );
}

export default NetflixContainer;
