import Logo from "../../assets/LOGO-tangerine.svg?react";
import WhatsappLogo from "../../assets/whatsapp-tangerine.svg?react";
import '../styles/navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const handleScroll = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            handleCloseMenu();
        }
    };

    const handleOpenMenu = () => {
        const menu = document.getElementById('sm-nav');
        menu.style.right = '0'
    }

    const handleCloseMenu = () => {
        const menu = document.getElementById('sm-nav');
        menu.style.right = '-100%'
    }

  return (
    <>
        <nav className="w-full space-x-4 flex items-center justify-between py-6 px-20 navigation-bar bg-rose-thiny fixed z-10">

            <div className='w-100 h-14 scale-150 md:pr-5'>
                {/* <h1 className='text-black'>Tangerine School</h1> */}
                
                <a href="#why-with-us" onClick={(e) => handleScroll(e, 'home-section')}>
                    <Logo className="w-40 h-100 transition-all duration-300 ease-in-out transform hover:scale-105"/>
                </a>
            </div>

            <a href="#our-method" onClick={(e) => handleScroll(e, 'our-method')} className='lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105'>Método</a>

            <a href="#why-with-us" onClick={(e) => handleScroll(e, 'home-section')} className='lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105'>Contacto</a>

            <a href="#modalities" onClick={(e) => handleScroll(e, 'modalities')} className='lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105'>Modalidades</a>

            <a href="#FAQ" onClick={(e) => handleScroll(e, 'FAQ')} className='lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105'>FAQ</a>

            <a href="https://api.whatsapp.com/send?phone=+526621998313&text=¡Estás a solo un click  de contactarnos ! 👀🍊✨" target="_blank" rel="noopener noreferrer" className="lg-link text-orange">
                <WhatsappLogo className="w-20 h-100 text-orange whatsapp-logo transition-all duration-300 ease-in-out transform hover:scale-105" />
            </a>
            
            <button onClick={handleOpenMenu} className="font-bold text-blue-strong menuBtn">
                <MenuIcon/>
            </button>
            
        </nav>
        
        <nav id="sm-nav">
            <div className="menu-header-sm h-9 mb-3">
                <button onClick={handleCloseMenu} className="p-4 font-bold text-blue-strong close-menu-btn">
                    <CloseIcon/>
                </button>
            </div>
            <div className="menu-content-sm">
                <div className="p-5 w-full text-center text-2xl font-bold text-blue-strong border-orange border-3">
                    <a className="" href="#our-method" onClick={(e) => handleScroll(e, 'our-method')}>Método</a>
                </div>
                <div className="p-5 text-center text-2xl font-bold text-blue-strong">
                    <a href="#our-method" onClick={(e) => handleScroll(e, 'why-with-us')}>Contacto</a>
                </div>
                <div className="p-5 text-center text-2xl font-bold text-blue-strong">
                    <a href="#our-method" onClick={(e) => handleScroll(e, 'modalities')}>Modalidades</a>
                </div>
                <div className="p-5 text-center text-2xl font-bold text-blue-strong">
                    <a href="#our-method" onClick={(e) => handleScroll(e, 'FAQ')}>FAQ</a>
                </div>
                <div className="p-5 text-center flex justify-center items-center">
                    <a href="https://api.whatsapp.com/send?phone=+526621998313&text=Hola Mundo" className="text-orange" target="_blank" rel="noopener noreferrer" onClick={handleCloseMenu}>
                    <WhatsappLogo className="w-20 h-100 text-orange whatsapp-logo"/>
                    </a>
                </div>
            </div>
        </nav>
    </>
  )
}