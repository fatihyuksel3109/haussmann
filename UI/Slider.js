import Slider from "react-slick";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const PhotoSlider = () => {
  return (
    <Slider {...settings}>
      <div style={{ display: "block", width: "100%", overflow: "hidden" }}>
        <Image
          src="/images/slider-photo1.jpg"
          alt="Slider Image 1"
          width={1000}
          height={500}
        />
      </div>
      <div>
        <Image
          src="/images/slider-photo2.jpg"
          alt="Slider Image 2"
          width={800}
          height={400}
        />
      </div>
      <div>
        <Image
          src="/images/slider-photo3.jpg"
          alt="Slider Image 3"
          width={800}
          height={400}
        />
      </div>
    </Slider>
  );
};

export default PhotoSlider;
