import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card, { services } from "../UI/Card";
import PhotoSlider from '../UI/Slider';




const Main = () => {
  return (
    <div className="bg-white flex flex-wrap font-sans">
      <div className="w-full p-4">
        <header className="mb-4 text-gray-900 text-center">
          <h1 className="text-4xl font-bold ">
            Haussmann Sols Résine
          </h1>
          <p className="text-2xl text-black text-gray-600 ">
            Revêtement de sols en résine dans le bâtiment et l'industrie.
          </p>
        </header>
        <div
          className="slick-list"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <PhotoSlider />
        </div>
       <div className="divide-y divide-slate-300 ">
        <div>
        <h1 className=" text-center text-blue-900 text-3xl font-bold my-5 px-20">
          -À la plus grande satisfaction de nos clients nous intervenons sur
          toute la France.
        </h1>
        <p className="text-right  text-center text-blue-600 text-xl font-bold my-5 px-20">
          Haussmann
        </p>
        </div>
        {services.map(service => (          
            <Card
            key={service.id}
            imageSrc={service.imageSrc}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            />
        ))}
      </div>
       </div>
    </div>
  );
};

export default Main;
