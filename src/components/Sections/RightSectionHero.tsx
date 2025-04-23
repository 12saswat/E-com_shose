import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image1 from "../Images/image1.png";
import image4 from "../Images/image4.png";

import { useEffect, useState } from "react";

const RightSectionHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const img = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % img.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [img.length]);
  return (
    <div className="flex justify-center items-center">
      <Carousel className="w-[550px]">
        <CarouselContent
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          className=""
        >
          {img.map((img, idx) => (
            <CarouselItem key={idx} className="min-w-full flex justify-center">
              <img
                src={img}
                alt={`Sneaker ${idx + 1}`}
                className="w-[400px] md:w-[500px] mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RightSectionHero;
