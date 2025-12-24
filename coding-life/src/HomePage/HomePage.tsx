import ParralaxBackgroundOne from "./ParralaxBackgroundO.tsx/ParralaxBackgroundOne";
import CharecterTyping from "./ParralaxBackgroundO.tsx/CharecterTyping";
import HeaderSetup from "../component/Header";

const HomePage = () => {
  return (
    <div style={{ position: "relative", overflowX: "hidden", width: "100%" }}>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-2xl border-1 border-gray-900 justify-center items-center z-50">
        <HeaderSetup />
      </div>
      <ParralaxBackgroundOne />
      <CharecterTyping />
      
      {/* Additional content sections */}
      <section style={{ 
        minHeight: "100vh", 
        background: "linear-gradient(to bottom, #000, #111)",
        padding: "4rem 2rem",
        color: "white",
        position: "relative",
        zIndex: 10
      }}>
        
      </section>
    </div>
  );
};

export default HomePage;