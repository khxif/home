import AirplaneIcon from "/airplane.svg";
import DollarIcon from "/dollar.svg";
import TagIcon from "/Tag.svg";

export default function TopBar() {
  return (
    <div className="bg-[#FFF5EB]">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between px-4 sm:px-6  md:px-8 lg:px-0">
        <div className="hidden sm:flex items-center space-x-4 text-[#EF8C5F]">

          <span className="flex items-center space-x-2 md:space-x-3">
            <img src={AirplaneIcon} />
            <p className="text-xs md:text-sm">Free delivery over $200</p>
          </span>

          <span className="flex items-center space-x-3">
            <img src={DollarIcon} />
            <p className="text-xs md:text-sm">Money back guarantee</p>
          </span>

          <span className="flex items-center space-x-3">
            <img src={TagIcon} />
            <p className="text-xs md:text-sm">Weekly new arrivals</p>
          </span>
          
        </div>
        <div className="flex items-center space-x-4 ml-auto sm:ml-0">
          <span>ENG</span>
          <span>US</span>
        </div>
      </div>
    </div>
  );
}
