import { useState } from "react";
import { motion } from "framer-motion";

const carouselData = [
  {
    id: 1,
    name: "Kia Seltos",
    description: "Stylish and feature-packed SUV",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Explore Now",
    details: ["Model : Test Drive Available", "Special Offers : 🔥"],
  },
  {
    id: 2,
    name: "2025 Skoda Kodiaq",
    description: "Now more modern and tech-loaded",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Know More",
    details: [
      "Kodiaq Launched",
      "Kia Syros Qinish Test",
      "Tiguan Ridge",
      "Activate Windows",
    ],
  },
  {
    id: 3,
    name: "Volkswagen Tiguan",
    description: "German engineering at its best",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cta: "Book Test Drive",
    details: [
      "2024 Model",
      "Limited Edition",
      "Premium Package",
      "View Gallery",
    ],
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (

    <div className="relative h-fit overflow-hidden mt-16 mb-5">

      {/* Desktop Layout */}
      <div className="hidden xl:block relative h-[90vh] ">

        {/* Background Image Container */}
        <div className="absolute xl:inset-3 2xl:inset-5 overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${carouselData[currentSlide].image})`,
              backgroundPosition: "center 60%",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative h-full container xl:mx-auto 2xl:mx-20 flex 2xl:items-center py-10 ">
          <div className="w-full flex">

            {/* Car Information - Left Side */}
            <div className="flex-1 max-w-[50%] text-white xl:px-5 ">
              <h3 className="text-white font-bold italic text-lg 2xl:text-5xl 2xl:mb-5">
                Launched
              </h3>
              <h1 className="text-4xl  font-semibold text-white italic 2xl:text-5xl 2xl:mb-5">
                {carouselData[currentSlide].name}
              </h1>
              <p className="text-xl  text-white italic mb-5 2xl:text-3xl 2xl:mb-10">
                {carouselData[currentSlide].description}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 2xl:px-10 2xl:py-5 rounded-md font-medium text-white text-lg">
                {carouselData[currentSlide].cta}
              </button>

              <div className="mt-5 2xl:mt-10">
                <ul className="">
                  {carouselData[currentSlide].details.map((detail, index) => (
                    <li
                      key={index}
                      className="text-white text-lg 2xl:text-3xl 2xl:mb-2"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Thumbnails - Right Side */}
            <div className="absolute flex-1 flex items-end justify-end top-[75%] left-[5%] 2xl:top-[81%]">
              <div className="grid grid-cols-3 gap-5 2xl:gap-10 w-full 2xl:w-[800px] ">
                {carouselData.map((car, index) => (
                  <button
                    key={car.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-lg overflow-hidden transition-all duration-300 ${
                      currentSlide === index
                        ? "ring-4 ring-blue-500 scale-105"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-32 2xl:h-40 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block xl:hidden relative h-[40vh] md:h-[50vh]">
        {/* Background Image Container */}
        <div className="absolute inset-2 overflow-hidden rounded-md">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${carouselData[currentSlide].image})`,
              backgroundPosition: "center 30%",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end">
          {/* Car Information */}
          <div className="text-white mb-8">
            <h3 className="text-white font-bold italic text-sm md:text-base">
              Launched
            </h3>
            <h1 className="text-2xl md:text-3xl font-semibold text-white italic mb-2">
              {carouselData[currentSlide].name}
            </h1>
            <p className="text-base md:text-lg text-white italic mb-4">
              {carouselData[currentSlide].description}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium text-white text-sm md:text-base">
              {carouselData[currentSlide].cta}
            </button>
          </div>

          {/* Thumbnails for Mobile/iPad */}
          <div className="flex space-x-3 overflow-x-auto py-2 no-scrollbar">
            {carouselData.map((car, index) => (
              <button
                key={car.id}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-md overflow-hidden border-2 ${
                  currentSlide === index
                    ? "border-blue-500"
                    : "border-white border-opacity-30"
                }`}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>

  );
};

export default Hero;