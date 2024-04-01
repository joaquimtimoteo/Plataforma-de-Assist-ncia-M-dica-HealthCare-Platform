import  { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/Angola.png';
import Novo1 from '../../assets/images/Novo1.png';
import { BiMenu } from 'react-icons/bi';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/CriptoDec',
    display: 'Saúde em Casa'
  },
  {
    path: '/Services',
    display: 'Custódia de Dados de Pacientes'
  },
  {
    path: '/Contact',
    display: 'Serviços'
  },
];

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleStickyHeader = () => {
    if (window.scrollY > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-44 h-auto" />
          </div>

          {/* Menu */}
          <div className={`navigation ${isMenuOpen ? 'show_menu' : ''}`} ref={menuRef} onClick={closeMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName='text-primaryColor text-[16px] leading-7 font-[600]'
                    className='text-[16px] leading-7 font-[600] hover:text-primaryColor '
                    onClick={closeMenu} 
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={Novo1} className='w-full rounded-full' alt="User" />
                </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600]  h-[44px]  flex justify-center rounded-[50px]'>Login</button>
            </Link>

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
