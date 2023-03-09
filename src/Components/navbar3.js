import  Nav from 'react-bootstrap/Nav';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function AlignmentExample() {
  return (
    <>
      <Nav className="sa justify-content-center bg-light m-2">
        <Nav.Item>
          <Nav.Link ><HomeIcon/><p className='n1 '>Home</p> </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><RemoveRedEyeIcon/> <p className='n1'>True View</p> </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ><ChatIcon/><p className='n1 '>Messenger</p> </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link><ShoppingCartIcon/> <p className='n1 '> cart</p></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link ><AccountCircleIcon/><p className='n1 '>My Alibaba</p> </Nav.Link>
        </Nav.Item>
      </Nav>

    </>
  );
}

export default AlignmentExample;