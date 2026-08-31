import { useRef, type FC } from "react";
import { useParams, Link } from "react-router";
import { mockPortfolioItems } from "../utils/api";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Tag: FC<{ tag: string }> = ({ tag }) => (
  <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 border border-indigo-700/50 hover:bg-indigo-700/50 transition-colors cursor-default">
    {tag}
  </span>
);

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const itemId = parseInt(id || "0", 10);
  const project = mockPortfolioItems.find((item) => item.id === itemId);

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current?.children, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    })
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-red-400 mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-6">Проект не найден.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 transition duration-150"
          >
            ← Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={containerRef}
      >
        <header className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center text-lg font-medium text-indigo-400 hover:text-indigo-300 transition mb-4 animate-fade-in-up"
          >
            ← Вернуться в портфолио
          </Link>
          <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl animate-fade-in-up delay-100">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl animate-fade-in-up delay-200">
            {project.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 group animate-fade-in-up delay-300">
              <img
                src={project.imageUrl}
                alt={`Preview for ${project.title}`}
                className="w-full h-96 object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-12">
                <div className="max-w-full">
                  <h3 className="text-4xl font-bold text-white">Детализация</h3>
                  <p className="text-gray-300 text-lg mt-1">
                    Более подробный взгляд на архитектуру и функции.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 animate-fade-in-up delay-400">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4">
                Ключевые особенности
              </h3>
              {Object.entries(project.other).map(([key, feature], index) => (
                <p key={index} className="text-gray-400 mb-2">
                  <span className="font-semibold text-indigo-200">{key}:</span>{" "}
                  {feature}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="p-8 bg-gray-800 rounded-xl shadow-2xl border border-indigo-500/30 lg:sticky lg:top-24 animate-fade-in-up delay-500">
              <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                Характеристики
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-indigo-300 mb-2">
                  Технологии
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div>
              </div>

              {(project.githubUrl || project.demoUrl) && (
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 text-base font-semibold rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition duration-200"
                    >
                      Исходный код на GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 text-base font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition duration-200"
                    >
                      Живое демо
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
