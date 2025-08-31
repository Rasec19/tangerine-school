# Tangerine School

<div className='space-x-5 text-2xl'>
    <NavLink 
        to="#home-section"
        className={({ isActive, isPending }) =>
            isPending ? "font-normal" : isActive ? "font-bold text-orange-400" : ""
        }
    >
        Inicio
    </NavLink>
    <NavLink 
        to="/about-us"
        className={({ isActive, isPending }) =>
            isPending ? "font-normal" : isActive ? "font-bold text-orange-400" : ""
        }
    >
        Sobre nosotros
    </NavLink>
    <NavLink 
        to="/contact"
        className={({ isActive, isPending }) =>
            isPending ? "font-normal" : isActive ? "font-bold text-orange-400" : ""
        }
    >
        Contacto
    </NavLink>
</div> 