
import { Link } from "react-router-dom";
import FloatingDream from "./FloatingDream";

const ChooseLifeDreamer = () => {
  return (
    <>
      <div className="flex-grid bg-black/20 w-[300px]  rounded-xl">
        <div className="text-blue-600 text-2xl font-bold">.Hello Dear</div>
        <div className="text-blue-600 text-2xl font-bold ">
          .Explore Dream Coding Life
        </div>
        <FloatingDream></FloatingDream>
        <Link to="/dream" className="flex justify-center items-center ">
            <button className="p-3 bg-blue-950 rounded-2xl text-white hover:text-blue-600 mb-10">Explore</button>
        </Link>
      </div>
    </>
  );
};

export default ChooseLifeDreamer;
