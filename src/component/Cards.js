import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import babu1 from '../assest/babu1.jpg'
import babu2 from '../assest/babu2.jpg'
import babu3 from '../assest/babu3.jpg'
import babu4 from '../assest/babu4.jpg'
import babu5 from '../assest/anvesh.jpg'

function Cards() {
  return (
    <div className='cards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={babu1} />
      <Card.Body>
        <Card.Title>Card Title1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={babu2} />
    <Card.Body>
      <Card.Title>Card Title2</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={babu3}/>
  <Card.Body>
    <Card.Title>Card Title3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={babu4} />
      <Card.Body>
        <Card.Title>Card Title4</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={babu5} />
    <Card.Body>
      <Card.Title>Card Title5</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Cards;