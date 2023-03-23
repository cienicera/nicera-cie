import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Landing from './landing';

const Index = () => {
  const [isClient, setIsClient] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="root">
      {isClient && (
        <>
          {showNavbar && (
            <nav className="fixed top-0  w-full z-40 text-white grid grid-flow-col p-10 items-center" >
              {/* put the logo */}
              <div className="flex items-center">
                <img src="/assets/image/NICERA 4x.png" alt="logo" className='h-8' />
                <h1 className="ml-2 text-xl font-bold">.</h1>
              </div>

              <ul className="flex justify-center space-x-4">
                <li>
                  <Link
                    activeClass="text-blue-500"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    .
                  </Link>
                </li>
                {/* Ajoutez d'autres liens ici si nécessaire */}
              </ul>
            </nav>
          )}
          <Landing />
        </>
      )}
    </div>
  );
};

export default Index;
