import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample7() {
  return (
    <Card className='bg-light'style={{ width: '20rem' }}>
      <Card.Img variant="top" src='https://s.alicdn.com/@sc04/kf/A783676cfb1c444fbb267fd9b7fa7794bj.jpg_250x250.jpg' />
      <Card.Body>
        <Card.Title>Card Title
          <i className='apple'>apple</i>
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default BasicExample7;