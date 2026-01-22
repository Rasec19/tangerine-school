import Logo from "../../assets/LOGO-tangerine.webp";
import WhatsappLogo from "../../assets/whatsapp-tangerine.svg?react";
import {  whatsappLink } from '../../data'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleCloseMenu();
    }
  };

  const handleOpenMenu = () => {
    const menu = document.getElementById("sm-nav");
    menu.style.right = "0";
  };

  const handleCloseMenu = () => {
    const menu = document.getElementById("sm-nav");
    menu.style.right = "-100%";
  };

  return (
    <>
      {/* NAV DESKTOP + MOBILE HEADER */}
      <nav className="w-full flex items-center justify-between py-3 px-6 md:px-16 bg-rose-thiny fixed z-50">
        {/* LOGO - RESPONSIVE */}
        <div className="flex items-center">
          <a
            href="#home-section"
            onClick={(e) => handleScroll(e, "home-section")}
            aria-label="logo app"
          >
            <img
              src={Logo}
              alt="Logo Tangerine"
              className="w-28 md:w-40 lg:w-48 h-auto transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </a>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden lg:flex items-center gap-24">
          <a
            href="#our-method"
            onClick={(e) => handleScroll(e, "our-method")}
            className="text-xl font-black text-blue-strong hover:scale-105 transition-transform"
          >
            Método
          </a>

          <a
            href="#home-section"
            onClick={(e) => handleScroll(e, "home-section")}
            className="text-xl font-black text-blue-strong hover:scale-105 transition-transform"
          >
            Contacto
          </a>

          <a
            href="#modalities"
            onClick={(e) => handleScroll(e, "modalities")}
            className="text-xl font-black text-blue-strong hover:scale-105 transition-transform"
          >
            Modalidades
          </a>

          <a
            href="#FAQ"
            onClick={(e) => handleScroll(e, "FAQ")}
            className="text-xl font-black text-blue-strong hover:scale-105 transition-transform"
          >
            FAQ
          </a>
        </div>

        {/* WHATSAPP DESKTOP */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="whatsapp link"
          className="lg:block hidden"
        >
          <WhatsappLogo className="w-12 h-auto hover:scale-110 transition-transform text-orange" />
        </a>

        {/* WHATSAPP + MENU MOBILE */}
        <div className="flex lg:hidden items-center gap-4">
          {/* WhatsApp ICON MOBILE */}
          <a
            href={whatsappLink}
            aria-label="whatsapp mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo className="w-10 h-auto text-orange" />
          </a>

          {/* Menu button */}
          <button
            onClick={handleOpenMenu}
            aria-label="menu icon"
            className="text-blue-strong"
          >
            <MenuIcon className="text-4xl" />
          </button>
        </div>
      </nav>

      {/* MENU LATERAL MOBILE */}
      <nav
        id="sm-nav"
        className="fixed top-0 right-[-100%] w-full max-w-md
        h-screen bg-rose-thiny shadow-xl z-[999] transition-all duration-300 p-6"
      >
        {/* HEADER MENU */}
        <div className="flex justify-end">
          <button onClick={handleCloseMenu} aria-label="close menu">
            <CloseIcon className="text-4xl text-blue-strong" />
          </button>
        </div>

        {/* LINKS MENU */}
        <div className="mt-6 space-y-6 text-2xl font-black text-blue-strong flex flex-col items-center">
          <a href="#our-method" onClick={(e) => handleScroll(e, "our-method")}>
            Método
          </a>
          <a
            href="#home-section"
            onClick={(e) => handleScroll(e, "home-section")}
          >
            Contacto
          </a>
          <a href="#modalities" onClick={(e) => handleScroll(e, "modalities")}>
            Modalidades
          </a>
          <a href="#FAQ" onClick={(e) => handleScroll(e, "FAQ")}>
            FAQ
          </a>
        </div>
      </nav>
    </>
  );
};
