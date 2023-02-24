import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample4() {
  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src='https://s.alicdn.com/@sc04/kf/H0cfc9a187674409a86d64a1686da0a82t.png_250x250.jpg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default BasicExample4;