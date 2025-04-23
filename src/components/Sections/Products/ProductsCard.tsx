import Products from "./Products.json";
import { Button } from "@/components/ui/button";
import RatingStars from "./RatingStars";

const ProductsCard = () => {
  return (
    <div className={`lg:mr-20 lg:pt-20 pt-10 font-montserrat relative ml-3`}>
      <h1 className="text-4xl font-bold ml-20">Top picks for you</h1>
      <div className="relative lg:ml-16">
        {/* Scrollable Job Cards */}
        <div className="lg:pt-10 pt-3 flex lg:gap-7 gap-5 overflow-x-auto scrollbar-hide lg:w-[1306px] lg:ml-7 h-[360px]">
          {Products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center bg-[#E8EFF5] border border-zinc-100 lg:p-3 p-2 rounded-lg shadow-md lg:w-[284px] lg:h-[263px] w-[264px] h-[336px] lg:gap-6 gap-4"
            >
              <div className=" flex flex-col gap-20">
                <div className="lg:gap-4 gap-2 lg:h-[64px] lg:w-[284px] w-[261px] h-[80px] items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="lg:w-[100px] lg:h-[100px] w-[56px] h-[56px] mb-3 shadow-md border-1"
                  />
                  <div className="flex flex-col mb-4">
                    <p className="text-sm text-gray-700">
                      <RatingStars rating={4} />
                    </p>
                  </div>
                </div>

                <div className="text-[#304F67] font-medium flex flex-col gap-1 ml-2">
                  <p className="lg:text-[20px] font-semibold flex items-center gap-3">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className=" bg-[#1B5A97] w-[98px] h-[44px] flex items-center justify-center text-white mx-auto font-medium rounded-md  ">
                  View
                </Button>
                <Button variant={"destructive"}>Delete button</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
