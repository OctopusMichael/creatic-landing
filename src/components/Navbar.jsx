import { useState } from "react";
import { menu } from "../utils/Constans";
import { ArrowLeft, Menu, X } from "lucide-react";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const scrollToSection = (targetSection) => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <section id="Top" className="containerr">
      <nav className="flex justify-between items-center p-10 lg:px-[200px]">
        <div className="flex flex-col text-center">
          <a className="text-5xl text-blue font-bold" href="#">
            {" "}
            Creatic
          </a>
          <a className="text-[14px]" href="#">
            {" "}
            Creative Agency
          </a>
        </div>
        <button
          onClick={handleMenu}
          className=" p-3 rounded-lg border border-white  flex justify-center items-center"
        >
         { burgerMenu ? <X/> : <Menu />}
        </button>

        {/* Desktop */}
        <ul className="lg:flex gap-6 hidden">
          {menu?.map((e) => (
            <li key={e.id}>
              <button
                onClick={() => scrollToSection(e.section)}
                className={`hover:text-blue`}
              >
                {e.section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
