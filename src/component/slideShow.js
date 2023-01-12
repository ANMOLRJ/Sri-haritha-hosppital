import Carousel from 'react-bootstrap/Carousel';
import images1 from '../assest/anvesh.jpg';
// import images2 from '../assest/anhd1.jpg';
import images3 from '../assest/anhd3.jpg';
import images4 from '../assest/anhd4.jpg';
import images5 from '../assest/anhd5.jpg';
// import images3 from "../assest/EHS-Banner.png";


function IndividualIntervalsExample() {
  return (
    <Carousel >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={images1}
          width='10px'
          height='500px'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        {/* <img
          className="d-block w-100"
          src={images2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}> */}
        <img
          className="d-block w-100"
          src={images3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={images4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={images5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;