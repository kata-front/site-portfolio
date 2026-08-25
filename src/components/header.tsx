import { useGSAP } from "@gsap/react";
import { useRef, useState, type FC } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";
const Header: FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const prevScroll = useRef(0);
  const [, setScrolled] = useState(false);

  useGSAP(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll.current) {
        setScrolled(false);
        gsap.to(headerRef.current, {
          yPercent: -100,
          opacity: 0,
          duration: 1,
        });
      } else if (currentScroll === 0) {
        setScrolled(false);
        gsap.to(headerRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 1,
        });
      } else {
        setScrolled(true);
        gsap.to(headerRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 1,
        });
      }

      prevScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`transition-colors duration-300 fixed w-screen h-[7vh] p-5 font-manrope text-white flex justify-between items-center z-50 ${
        window.scrollY === 0 ? "bg-black" : "bg-black/50 backdrop-blur-md"
      }`}
    >
      <div>Кирилл Ненашев</div>

      {!isMobile ? (
        <div className="flex gap-3 text-sm *:cursor-pointer">
          <a href={'/'} className='relative hover:-translate-y-1 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
            Обо мне
          </a>
          <a href={'#projects'} className='relative transition-all hover:-translate-y-1 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300'>
            Проекты
          </a>
          <a href={'#contacts'} className='relative transition-all hover:-translate-y-1 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300'>
            Контакты
          </a>
        </div>
      ) : (
        <div className="flex flex-col w-4.5 h-3 items-center justify-between">
          <div className='w-full h-0.5 rounded-2xl bg-white'></div>
          <div className='w-full h-0.5 rounded-2xl bg-white'></div>
          <div className='w-full h-0.5 rounded-2xl bg-white'></div>
        </div>
      )}
    </header>
  );
};

export default Header;
