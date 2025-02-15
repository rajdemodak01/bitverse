import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NodeCard = ({
  title,
  description,
  style,
  onClick,
  showButton = true,
  visible = false,
}: {
  title: string;
  description: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  showButton?: boolean;
  visible?: boolean;
}) => (
  <div
    className={`absolute border-2 border-[rgba(75,30,133,0.5)] rounded-[2em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1.5em] flex justify-center items-center flex-col gap-[1em] backdrop-blur-[12px] z-10 transition-opacity duration-500 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
    style={style}
    onClick={onClick}
  >
    <div>
      <h1 className="text-[2em] font-medium">{title}</h1>
      <p className="text-[1em]">{description}</p>
    </div>
    {showButton && (
      <button className="h-fit w-fit px-[1.5em] py-[0.5em] border-[1px] rounded-full flex justify-center items-center gap-[0.75em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
        <p>Explore</p>
      </button>
    )}
  </div>
);

const Commercelibrary = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    visibleCards.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleCards((prev) =>
          prev.map((visible, i) => (i === index ? true : visible))
        );
      }, index * 700);
      timeoutIds.push(timeoutId);
    });
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  const handleNodeClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="h-screen w-screen bg-cover bg-fixed" style={{ backgroundImage: "linear-gradient(to right, #076585, #fff)" }}>
      <div className="relative h-full w-full">
        <NodeCard 
          title="Commerce" 
          description="Explore career paths in Finance, Business, and Accounting." 
          style={{ top: "20%", left: "50%", transform: "translate(-50%, -50%)" }} 
          showButton={false} 
          visible={visibleCards[0]}
        />
        <NodeCard 
          title="Accounting" 
          description="Explore careers in Chartered Accountancy & Taxation." 
          style={{ top: "60%", left: "20%", transform: "translate(-50%, -50%)" }} 
          onClick={() => handleNodeClick("/career-commerce/accounting")} // ✅ FIXED PATH
          visible={visibleCards[1]}
        />
        <NodeCard 
          title="Finance" 
          description="Explore careers in Investment Banking & Stock Market." 
          style={{ top: "60%", left: "50%", transform: "translate(-50%, -50%)" }} 
          onClick={() => handleNodeClick("/career-commerce/finance")} // ✅ FIXED PATH
          visible={visibleCards[2]}
        />
        <NodeCard 
          title="Business" 
          description="Explore business strategies and entrepreneurship." 
          style={{ top: "60%", left: "80%", transform: "translate(-50%, -50%)" }} 
          onClick={() => handleNodeClick("/career-commerce/business")} // ✅ FIXED PATH
          visible={visibleCards[3]}
        />

        <svg className="absolute top-0 left-0 w-full h-full z-0">
          <line x1="50%" y1="28%" x2="20%" y2="50%" stroke="black" strokeWidth="2" />
          <line x1="50%" y1="28%" x2="50%" y2="50%" stroke="black" strokeWidth="2" />
          <line x1="50%" y1="28%" x2="80%" y2="50%" stroke="black" strokeWidth="2" />
        </svg>

        <div className="flex w-full justify-center items-center p-5">
          <h1 className="text-lg font-bold text-black">
            Explore <span className="text-white">Finance</span>, <span className="text-white">Business</span>, and <span className="text-white">Accounting</span> careers.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Commercelibrary;
