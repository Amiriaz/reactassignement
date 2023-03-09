import Nav from 'react-bootstrap/Nav';

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link className="border rounded m-2 text-black bg-light"><img className="border rounded-pill"src='https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg'></img>Consumer Electronics</Nav.Link>
      <Nav.Link className="border rounded m-2 text-black bg-light"><img className="border rounded-pill"src='https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png_50x50xz.jpg'></img>Apparel</Nav.Link>
      <Nav.Link className="border rounded m-2 text-black bg-light"><img className="border rounded-pill"src='https://sc02.alicdn.com/kf/HTB1JdWLUhTpK1RjSZR0762EwXXa6.png_50x50xz.jpg'></img>Vehicle Parts & Accessories</Nav.Link>
      <Nav.Link className="border rounded m-2 text-black bg-light"><img className="border rounded-pill"src='https://sc02.alicdn.com/kf/HTB1AkuTUgHqK1RjSZJn762NLpXa2.png_50x50xz.jpg'></img>Sports & Entertainment</Nav.Link>
      <Nav.Link className="border rounded m-2 text-black bg-light"><img className="border rounded-pill"src='https://sc02.alicdn.com/kf/H5e92ef24edc94162b72c331cbd6fbe6fn.png_50x50xz.jpg'></img>Industrial Machinery</Nav.Link>
      <Nav.Link className="border rounded m-2 text-black bg-light"><img className="border rounded-pill"src='https://sc02.alicdn.com/kf/HTB1RxCkXHys3KVjSZFn760FzpXaP.png_50x50xz.jpg'></img>Home & Garden</Nav.Link>
      <Nav.Link className="border rounded m-2 text-black bg-light"><img className="border rounded-pill"src='https://img.alicdn.com/tfs/TB1SFxHuVY7gK0jSZKzXXaikpXa-36-36.png'></img>All categories</Nav.Link>
      
    </Nav>
  );
}

export default StackedExample;