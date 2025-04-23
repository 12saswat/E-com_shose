import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import People from "./Peoples.json";
import RatingStars from "../Products/RatingStars";
import { useEffect, useState } from "react";

const ReviewSec = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === People.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-screen bg-[url('https://wallpaper.forfun.com/fetch/bc/bc22e8b6f2b90e84e370b8ac3acfb5f6.jpeg')] bg-cover bg-no-repeat bg-center">
      <h1 className="text-7xl font-bold bg-gradient-to-r from-[#f7f8f9] via-[#898919] to-[#2cd63a] bg-clip-text text-transparent pt-[100px] pl-[200px] w-auto">
        Greatest Reviews
      </h1>

      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center h-[400px] w-[500px] rounded-lg shadow-lg mt-20 ">
          <div className="backdrop-blur-3xl transition duration-500 ease-in-out bg-transparent">
            <Card className="w-[400px] h-[250px] shadow-lg rounded-lg bg-transparent">
              <CardHeader className="flex items-center gap-4">
                <img
                  src={People[currentIndex].pic}
                  className="bg-cover w-[70px] h-[70px] rounded-full"
                  alt={People[currentIndex].name}
                />
                <CardTitle className="text-xl font-semibold text-[#dbe1ea]">
                  {People[currentIndex].name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[16px] font-medium text-white">
                  {People[currentIndex].comment}
                </p>
              </CardContent>
              <CardFooter>
                <RatingStars rating={People[currentIndex].rating} />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;
