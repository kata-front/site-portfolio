import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface PortfolioItem {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const mockPortfolioItems: PortfolioItem[] = [
  {
    title: "3D Task System",
    description:
      "Interactive task management system with real-time updates and 3D visualization.",
    tags: ["React", "Nest.js", "SCSS", "Three.js", "Docker"],
    imageUrl: "images/projects-previews/task-system.png",
    link: "/task-system",
  },
  {
    title: "Lending Page",
    description:
      "Responsive landing page with specific design.",
    tags: ["React", "TypeScript", "GSAP", "SCSS", "vite", "Adaptation"],
    imageUrl: "images/projects-previews/gl.png",
    link: "#project2",
  },
  {
    title: "Messanger",
    description:
      "Messenger clone with Next.js, Socket.io, TypeScript, Redux, Tailwind CSS, Prisma, and Jose.",
    tags: ["Next.js", "Socket.io", "TypeScript", "Redux", "Tailwind CSS", "Prisma", "Jose"],
    imageUrl: "/images/projects-previews/messanger.png",
    link: "#project3",
  },
  {
    title: "3D Task System",
    description:
      "Interactive task management system with real-time updates and 3D visualization.",
    tags: ["React", "Nest.js", "SCSS", "Three.js", "Docker"],
    imageUrl: "images/projects-previews/task-system.png",
    link: "#project4",
  }
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardsContainerRef.current) return;
    const cards = cardsContainerRef.current.children;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.fromTo(cards, {
      yPercent: -100,
      opacity: 0,
      ease: "power2.out",
    }, {
      yPercent: 0,
      opacity: 1,
      ease: "power2.out",
      stagger: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-base uppercase tracking-widest text-indigo-400 mb-2">
            Портфолио Работ
          </h2>
          <h3 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Мои лучшие проекты
          </h3>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Примеры моих работ, демонстрирующие навыки в создании чистых,
            масштабируемых и красивых веб-приложений.
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          ref={cardsContainerRef}
        >
          {mockPortfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-indigo-500/40 border border-gray-700/50 hover:border-indigo-500/50"
              style={{ perspective: "1200px" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={`Image for ${item.title}`}
                  className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-800/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <div className="max-w-full">
                    <h4 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700/50 hover:bg-indigo-700/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  className="block w-full text-center py-3 mt-2 text-lg font-semibold rounded-lg transition duration-300 
                             bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 
                             transform hover:scale-[1.02] hover:shadow-indigo-500/50 active:scale-95"
                >
                  Смотреть проект &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;