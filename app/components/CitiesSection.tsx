"use client";

import Image from "next/image";
import Slider from "react-slick";

const cities = [
  {
    name: "Toledo",
    image: "/toledo.jpg",
  },
  {
    name: "Alicante",
    image: "/alicante.jpg",
  },
  {
    name: "Málaga",
    image: "/malaga.jpg",
  },
  {
    name: "Madrid",
    image: "/madrid.jpg",
  },
  {
    name: "Barcelona",
    image: "/barcelona.jpg",
  },
];

const CitiesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-end mb-16 gap-6">
          <div className="space-y-4 text-white">
            <h2 className="text-3xl md:text-5xl font-heading max-w-xl leading-tight text-center">
              Vive todo el encanto de España
            </h2>
          </div>
        </div>

        <div className="slick-cities">
          <Slider {...settings}>
            {cities.map((city) => (
              <div key={city.name} className="px-4 outline-none">
                <div className="group relative aspect-[3/2] overflow-hidden rounded-2xl cursor-pointer">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
