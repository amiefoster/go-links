import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Search({ filterRepos, setSearchTerm, searchTerm }) {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search Repositories by Organization </Form.Label>
          <Form.Control
            placeholder="Search"
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Form.Text className="text-muted">Enter search term above.</Form.Text>
        </Form.Group>

        <div className="search-button" onClick={(e) => filterRepos(e)}>
          Submit
        </div>
      </Form>
    </Container>
  );
}

export default Search;
