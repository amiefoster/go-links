import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

//Header component displays 2 pieces of information to users. 1. On the left, the name of the project and 2. on the right, the current repo they are viewing
  //Styled using bootstrap components and custom CSS

function Header({searchTerm}) {  
  return (
    <Navbar>
      <Container className="header-container">
        <p>go</p> <p className="header-slash">/</p> <p>links Take Home</p>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <p className="header-right">
            Looking at Repos for: {searchTerm}
          </p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
  
  export default Header;