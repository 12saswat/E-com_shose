import secondSec from "../Images/2ndSec.png";
import { Button } from "../ui/button";
const SecondSec = () => {
  return (
    <div className="relative mt-20">
      <div className="mx-20 flex flex-col gap-5 absolute">
        <h1 className="text-[80px] font-semibold font-serif w-full">
          {" "}
          Air Jordan 1 Retro{" "}
          <span className=" ml-[560px] text-[#d30e0e]">High OG</span>
        </h1>
        <p className="text-[17px] font-extralight text-red-700 w-[700px] absolute top-[100px]">
          initially released in 1985, has been remastered for today's sneaker
          culture with premium leather, comfortable cushioning, and classic
          design details
        </p>
        <Button
          className="border-1 mx-4 my-3 rounded-3xl hover:bg-transparent bg-white absolute top-[240px] w-[150px] text-[#d81212] cursor-pointer"
          variant={"outline"}
        >
          Check it out
        </Button>
      </div>
      <div className=" h-[600px]">
        <div className="absolute top-[200px] left-0 w-full h-[400px] bg-gradient-to-t from-[#ef0505] to-90% z-0" />
        <img
          src={secondSec}
          alt=""
          className="w-[1100px] ml-[400px] relative"
        />
      </div>
    </div>
  );
};

export default SecondSec;
