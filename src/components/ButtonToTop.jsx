import { MoveUpRight } from "lucide-react";
import { useState } from "react";

const ButtonToTop = () => {
  const [arrow, setArrow] = useState(false);
  const scrollToSection = (targetSection) => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onMouseOver={() => setArrow(true)}
      onMouseOut={() => setArrow(false)}
      onClick={() => scrollToSection("Top")}
      className="p-3 border border-white rounded-xl fixed bottom-5 right-5 transition-all hover:scale-125 duration-75 ease-in-out"
    >
      <MoveUpRight className={`${arrow ? "-rotate-45" : "rotate-0"}`} />
    </button>
  );
};

export default ButtonToTop;
