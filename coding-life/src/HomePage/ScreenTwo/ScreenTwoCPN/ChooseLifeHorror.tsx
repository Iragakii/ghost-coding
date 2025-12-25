import { Link } from "react-router-dom";
import FloatingCards from "./FloatingCard";

const ChooseLifeHorror = () => {
  return (
    <>
      <div className="flex-grid bg-black/20 w-[300px]  rounded-xl">
        <div className="text-red-600 text-2xl font-bold">.Hello Dear</div>
        <div className="text-red-600 text-2xl font-bold ">
          .Explore Horror Coding Life
        </div>
        <FloatingCards></FloatingCards>
        <Link to="/horror" className="flex justify-center items-center ">
            <button className="p-3 bg-red-950 rounded-2xl text-white hover:text-red-600 mb-10">Explore</button>
        </Link>
      </div>
    </>
  );
};

export default ChooseLifeHorror;
