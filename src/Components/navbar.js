import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar className='position-fixed 'bg='light'  expand="lg">
        <img src="https://s.alicdn.com/@img/tfs/TB1hVGkvVP7gK0jSZFjXXc5aXXa-365-49.svg" width="35%"/>
        <Form>
        <Form.Control
              type="search"
              placeholder="What are looking"
              className="as border rounded-pill bg-light"
              aria-label="Search"/>
             <img className='ass bg-dark m-3 'src='https://img.alicdn.com/imgextra/i1/O1CN01WaDuwO256WBsSocYY_!!6000000007477-2-tps-48-48.png'width={15}/> 
  
       </Form>
    </Navbar>
  );
}

export default NavScrollExample;