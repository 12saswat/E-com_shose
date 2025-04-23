import { Button } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import RightSectionHero from "./RightSectionHero";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-12 px-6 md:px-20 pt-16 ">
        <h1 className="text-4xl md:text-8xl font-bold leading-none">
          Step into Style with <br />
          <span className="font-light w-full ml-[160px]">Fresh Kicks</span>
        </h1>

        <p className="text-gray-600 text-lg font-mono font-semibold">
          Discover the latest sneaker trends and exclusive deals only at our
          store.
        </p>

        <p className="text-blue-600 text-md italic font-medium">
          Join our sneaker fam & unlock exclusive perks!
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button className="px-6 py-3 rounded-lg transition cursor-pointer">
            Shop Now
          </Button>

          <Link
            className="px-6 py-1  hover:bg-blue-700 hover:border-0 text-blue-400 hover:text-white border-2 border-blue-300 rounded-lg transition cursor-pointer"
            to={"/notifyForm"}
          >
            Notify me
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative mb-10 md:mb-0 bg-blue-100 bg-gradient-to-r from-white to-blue-200">
        <HoverCard>
          <HoverCardTrigger asChild>
            <RightSectionHero />
          </HoverCardTrigger>
          <HoverCardContent className="backdrop-blur-md bg-white/30 border border-white/20 shadow-lg rounded-xl px-6 py-4 mt-4 text-center text-gray-800">
            <p className="font-semibold">Nike Air Zoom</p>
            <p className="text-sm text-gray-600">
              Lightweight. Stylish. Performance.
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </section>
  );
};

export default Hero;
