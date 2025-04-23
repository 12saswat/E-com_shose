import img1 from "../Images/about1.png";
import img2 from "../Images/about2.png";
import logo from "../Images/Logo_NIKE.svg";

const StorySec = () => {
  return (
    <div className=" font-montserrat h-full lg:h-[964px] w-full px-3 bg-blue-50">
      <div className="lg:pl-6 lg:pr-6  lg:block flex flex-col items-center">
        <div className="lg:flex gap-5 lg:justify-around items-center sm:justify-center">
          <div className="lg:mt-16 pt-4 p-10 backdrop-blur-md bg-white/50 rounded-2xl">
            <p className="text-[30px] font-bold">Telling you our story</p>
            <p className=" opacity-90 lg:w-[778px] lg:h-auto w-12/12 h-[262px] text-[17px] lg:tracking-wide text-opacity-90 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              voluptates dolore officiis iusto necessitatibus enim numquam culpa
              libero minima reprehenderit pariatur ducimus magni similique
              voluptatum adipisci et ipsum temporibus, exercitationem facere
              quam impedit! Neque est commodi veniam quibusdam quia vitae!
            </p>
          </div>
          <div className="lg:mt-16 mt-9">
            <img
              src={img1}
              alt=""
              className="lg:h-[382px] lg:w-[330px] h-[353px] w-full"
            />
          </div>
        </div>
        <div className="lg:flex gap-5 justify-around">
          <div className="lg:mt-10 pt-2">
            <img src={img2} alt="" className=" w-[700px] bg-cover" />
          </div>
          <div className="lg:mt-16 pt-4 p-10 backdrop-blur-md bg-white/50 rounded-2xl h-[300px]">
            <h1 className="text-[30px] font-bold">Why people choose</h1>
            <table className="mt-7">
              <tbody className="flex flex-col gap-5">
                <tr className="flex gap-5 items-center">
                  <td>
                    <img src={logo} alt="" className="w-[30px]" />
                  </td>
                  <td>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odit.
                  </td>
                </tr>
                <tr className="flex gap-5 items-center">
                  <td>
                    <img src={logo} alt="" className="w-[30px]" />
                  </td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                </tr>
                <tr className="flex gap-5 items-center">
                  <td>
                    <img src={logo} alt="" className="w-[30px]" />
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, quidem!
                  </td>
                </tr>
                <tr className="flex gap-5 items-center">
                  <td>
                    <img src={logo} alt="" className="w-[30px]" />
                  </td>
                  <td>Lorem ipsum dolor sit amet consectetur.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySec;
