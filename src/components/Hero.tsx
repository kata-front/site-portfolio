import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import heroBg from "/images/hero-image.jpg";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        buttonsRef.current!.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
        "-=0.3",
      )
      .fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2",
      );
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white p-4 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-3 tracking-tighter"
        >
          Кирилл Ненашев
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8 font-light text-indigo-300"
        >
          Full-stack разработчик | Современные веб-решения
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="cursor-pointer px-8 py-3 text-base font-semibold rounded-lg transition duration-300 shadow-xl
                       bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/50 transform hover:scale-105 tracking-wider"
          >
            Портфолио
          </a>
          <a
            href="#contacts"
            className="cursor-pointer px-8 py-3 text-base font-semibold rounded-lg transition duration-300 shadow-xl
                       border-2 border-white text-white hover:bg-white hover:text-indigo-600 transform hover:scale-105 tracking-wider"
          >
            Контакты
          </a>
        </div>

        <p
          ref={textRef}
          className="text-base md:text-lg text-gray-300 max-w-xl mx-auto"
        >
          Создаю чистые, масштабируемые и красивые веб-приложения с акцентом на
          пользовательский опыт.
        </p>
      </div>
    </section>
  );
};

export default Hero;
