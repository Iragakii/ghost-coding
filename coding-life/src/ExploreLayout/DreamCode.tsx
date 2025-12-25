import HeaderSetup from "../component/Header";
import DreamMoving from "./DreamCode/DreamMoving";
import ParralaxBackgroundTwo from "./DreamCode/ParralaxBackgroundTwo";


const DreamCode = () => {
  return (
    <div style={{ position: "relative", overflowX: "hidden", width: "100%" }}>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-2xl px-2 border-1 border-gray-900 justify-center items-center z-50">
        <HeaderSetup />
      </div>
      <ParralaxBackgroundTwo />
      <DreamMoving></DreamMoving>
      
     
    </div>
  );
};

export default DreamCode;