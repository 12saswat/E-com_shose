import latest1 from "../Images/latest1.png";
import latest2 from "../Images/latest2.png";
import latest3 from "../Images/latest3.png";
import { Button } from "../ui/button";
import RatingStars from "./Products/RatingStars";
import { FaCartArrowDown } from "react-icons/fa";

const LatestProductsSec = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-10 gap-10">
      <div>
        <h1 className="text-[50px] font-bold text-center">
          Our latest products
        </h1>
        <p className="text-[20px] font-light">
          Now that you have a ready strategy to move forward. It's time to come
          up with some ideas{" "}
        </p>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className=" rounded-full bg-gradient-to-b from-70% to-blue-100 from-transparent p-2">
            <img src={latest1} alt="" className="w-[270px]" />
          </div>
          <p>Nike Women's Flex Experience RN 8</p>
          <RatingStars rating={4} />
          <div className="flex gap-3">
            <Button
              variant={"outline"}
              className="border-2 border-green-300 hover:bg-green-300 cursor-pointer mt-2"
            >
              Add to cart
              <FaCartArrowDown className="" />
            </Button>
            <Button
              variant={"outline"}
              className="border-2 border-green-300 hover:bg-green-300 cursor-pointer mt-2"
            >
              Buy now
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <div className=" rounded-full bg-gradient-to-b from-70% to-blue-100 from-transparent p-2">
            <img src={latest2} alt="" className="w-[270px]" />
          </div>
          <p>Nike Air Jordan 1 Mid SE</p>
          <RatingStars rating={4} />
          <div className="flex gap-3">
            <Button
              variant={"outline"}
              className="border-2 border-green-300 hover:bg-green-300 cursor-pointer mt-2"
            >
              Add to cart
              <FaCartArrowDown className="" />
            </Button>
            <Button
              variant={"outline"}
              className="border-2 border-green-300 hover:bg-green-300 cursor-pointer mt-2"
            >
              Buy now
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className=" rounded-full bg-gradient-to-b from-70% to-blue-100 from-transparent p-2">
            <img src={latest3} alt="" className="w-[270px] h-[180px]" />
          </div>
          <p>Nike Air Jordan 1 Lows</p>
          <RatingStars rating={4} />
          <div className="flex gap-3">
            <Button
              variant={"outline"}
              className="border-2 border-green-300 hover:bg-green-300 cursor-pointer mt-2"
            >
              Add to cart
              <FaCartArrowDown className="" />
            </Button>
            <Button
              variant={"outline"}
              className="border-2 border-green-300 hover:bg-green-300 cursor-pointer mt-2"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductsSec;
