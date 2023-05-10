import { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const containerRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setIsOverlayVisible(true);
  };

  const handleCloseClick = () => {
    setIsOverlayVisible(false);
  };

  const handlePrevClick = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Calculate the width of the slider
    const containerWidth = containerRef.current.clientWidth;
    const imageWidth = 500; // default image width
    const numImagesPerRow = Math.floor(containerWidth / imageWidth);
    const sliderWidth = numImagesPerRow * imageWidth;
    setSliderWidth(sliderWidth);
  }, []);

  return (
    <div className="relative">
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-teal-50"
        ref={containerRef}
        style={{ height: "80vh", width: "100%", overflowX: "hidden" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-gray-300 cursor-pointer flex-none"
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      {isOverlayVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={handleCloseClick}
        >
          <div className="relative w-full h-full">
            <Image
              className="transition-transform duration-700 ease-linear"
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              layout="fill"
              objectFit="contain"
            />
            <button
              className="absolute top-1/2 left-0 px-4 py-2 bg-gray-800 text-white"
              style={{ transform: "translateY(-50%)" }}
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <button
              className="absolute top-1/2 right-0 px-4 py-2 bg-gray-800 text-white"
              style={{ transform: "translateY(-50%)" }}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
