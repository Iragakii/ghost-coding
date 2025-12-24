import { Link } from "react-router-dom";


const HeaderSetup = () => {
  



  return (
    <div className="relative w-full h-full flex items-center justify-center z-10">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full text-white/80 font-medium">
        <div className="flex gap-4 lg:gap-6 xl:gap-10 ">
          <Link to="https://mojito-qorr.onrender.com/">
            <button className="hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1">
              <span>Drink</span>
            </button>
          </Link>
          <Link to="https://acsii-iragaki.onrender.com/">
            <button className="hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1">
              <span>Camera</span>
            </button>
          </Link>
       
          <Link to="https://iragaki-fe.vercel.app/about">
            <button className="hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1">
              <span>My CV</span>
            </button>
          </Link>
          <Link to="https://badrabbit-iragaki-nft.onrender.com/">
            <button className="hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1">
              <span>NFT</span>
            </button>
          </Link>
          <Link to="https://autojc.netlify.app/">
            <button className="hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1">
              <span>Car Show</span>
            </button>
          </Link>
        </div>
        
       
          <Link to="/login">
            <button className="hover:text-[#7ADAA5] transition-colors duration-200 text-xl cursor-pointer">
              <i className="ri-user-6-fill"></i>
            </button>
          </Link>
       
      </div>

     
    </div>
  );
};

export default HeaderSetup;
