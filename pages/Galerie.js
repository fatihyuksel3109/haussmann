import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const images = [
  {
    id: "p1",
    src: "/images/bg.jpg",
    alt: "image",
  },
  {
    id: "p2",
    src: "/images/f1.jpg",
    alt: "image",
  },
  {
    id: "p3",
    src: "/images/f2.jpg",
    alt: "image",
  },
  {
    id: "p4",
    src: "/images/f3.jpg",
    alt: "image",
  },
  {
    id: "p5",
    src: "/images/m1.png",
    alt: "image",
  },
  {
    id: "p6",
    src: "/images/m2.png",
    alt: "image",
  },
  {
    id: "p7",
    src: "/images/carousel2.jpg",
    alt: "image",
  },
  {
    id: "p8",
    src: "/images/carousel4.jpg",
    alt: "image",
  },
  {
    id: "p9",
    src: "/images/carousel5.jpg",
    alt: "image",
  },
];

const Galerie = () => {
  return (
    <>
      <Header />
      <Gallery images={images} />
      <Footer />
    </>
  );
};

export default Galerie;
