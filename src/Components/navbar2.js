import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.alicdn.com/@img/imgextra/i4/O1CN01GSiP9H1wuaxYsjhsd_!!6000000006368-2-tps-990-400.png"
          alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.alicdn.com/@img/imgextra/i3/O1CN01M9x0R41VzdeRW8FYF_!!6000000002724-0-tps-990-400.jpg"
          alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.alicdn.com/@img/imgextra/i2/O1CN01TdDLaS1nTjBRaVT51_!!6000000005091-2-tps-990-400.png"
          alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.alicdn.com/@img/imgextra/i4/O1CN01ypqsQb1Zy2igbbfNq_!!6000000003262-0-tps-990-400.jpg"
          alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.alicdn.com/@img/imgextra/i4/O1CN014mRE6r24iFC0sZG2o_!!6000000007424-2-tps-990-400.png"
          alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.alicdn.com/@img/imgextra/i2/O1CN01PQBNqB26YkCLmTXf5_!!6000000007674-2-tps-990-400.png"
          alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;