import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <img src="https://s.alicdn.com/@img/tfs/TB1hVGkvVP7gK0jSZFjXXc5aXXa-365-49.svg" width="10%"/>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='header-category-wrapper trigger-active'>
            <h3 className='header-category-trigger'>
            <i class="sc-hd-prefix2-icon sc-hd-prefix2-icon-category sc-hd-prefix2-icon-s"></i>
            <span data-spm-anchor-id="a2700.product_home_l0.scGlobalHomeHeader.i0.552f67afy4d9WD">category</span>
            <i className="sc-hd-prefix2-icon sc-hd-prefix2-icon-arrow-down sc-hd-prefix2-icon-xs"></i>
            </h3>
            </div>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;