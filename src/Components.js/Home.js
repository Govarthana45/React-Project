import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Assets/new-inspired-by-custom.jpeg";
import ExampleCarouselImage1 from "../Assets/reown.jpg";
import ExampleCarouselImage2 from "../Assets/assured-buyback.jpg";
import back1 from "../Assets/back1.jpeg";
import back2 from "../Assets/back2.jpeg";
import back3 from "../Assets/back3.jpeg";
import back4 from "../Assets/back4.jpeg";
import back5 from "../Assets/back5.jpeg";

function Home() {
  return (
    <div className="book pt-3 pb-5">
      <Carousel className=" home ">
        <Carousel.Item>
          <img className="home" src={ExampleCarouselImage} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home"
            src={ExampleCarouselImage1}
            text="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home"
            src={ExampleCarouselImage2}
            text="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h5 className="bg-light text-bold ">
        Motorcycles ContinentalGT | New Himalayan | Bullet 350 | Classic 350
      </h5>
      <img src={back1} className="image1" />

      <h3 className="bg-light text-bold">Rides </h3>
      <img src={back2} className="image1" />

      <h3 className="bg-light text-bold">Apperal </h3>
      <img src={back3} className="image1" />

      <h3 className="bg-light text-bold">Accessories</h3>
      <img src={back4} className="image1" />

      <h3 className="bg-light text-bold">Locate us </h3>
      <img src={back5} className=" mb-5 image1" />
    </div>
  );
}

export default Home;
