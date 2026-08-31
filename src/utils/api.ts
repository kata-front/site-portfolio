import type { PortfolioItem } from "./types";

export const mockPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "3D Task System",
    description:
      "Интерактивная система управления задачами с обновлениями в реальном времени и 3D-визуализацией.",
    other: {
      "3D Visualization":
        "Интеграция THREE.js в приложение для визуализации 3D анимаций и интерактивных элементов.",
      "Real-time Updates":
        "Синхронизация для обновления информации в режиме реального времени.",
      "Task Management":
        "Функционал для создания, редактирования и удаления задач.",
      "User Authentication": "Аутентификация и авторизация пользователей.",
    },
    tags: ["React", "Nest.js", "SCSS", "Three.js", "Docker"],
    imageUrl: "images/projects-previews/task-system.png",
    githubUrl:
      "https://github.com/kata-front/3D-Task-Space---React-Version-Frontend-",
    demoUrl: "https://3-d-task-space-react-version.vercel.app/",
  },
  {
    id: 2,
    title: "Lending Page",
    description: "Адаптивный лендинг с уникальным дизайном.",
    other: {
      Adaptation: "Адаптация под мобильные устройства.",
      GSAP: "Интеграция библиотеки GSAP для создания сложных анимаций.",
      SCSS: "Использование SCSS для управления стилями.",
    },
    tags: ["React", "TypeScript", "GSAP", "SCSS", "vite", "Adaptation"],
    imageUrl: "images/projects-previews/gl.png",
    githubUrl: "https://github.com/kata-front/gaming-lending",
    demoUrl: "https://gaming-lending.vercel.app/",
  },
  {
    id: 3,
    title: "Messenger",
    description:
      "Клон мессенджера с использованием Next.js, Socket.io, TypeScript, Redux, Tailwind CSS, Prisma и Jose.",
    other: {
      "Socket.io": "Интеграция Socket.io для реализации веб-сокетов.",
      Prisma: "Использование Prisma для работы с базой данных.",
      "Tailwind CSS": "Использование Tailwind CSS для управления стилями.",
      Jose: "Использование Jose для полноценной аутентификации пользователей.",
    },
    tags: [
      "Next.js",
      "Socket.io",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Prisma",
      "Jose",
    ],
    imageUrl: "/images/projects-previews/messanger.png",
    githubUrl: "https://github.com/kata-front/messanger",
  },
  {
    id: 4,
    title: "Online Store",
    description:
      "Платформа интернет-магазина с каталогом товаров, корзиной и имитацией оформления заказа.",
    other: {
      "Product Catalog": "Удобный каталог товаров с фильтрацией и поиском.",
      "Shopping Cart":
        "Корзина покупателя: добавление, изменение и удаление товаров.",
      "Order Checkout": "Имитация оформления заказа (без реальных платежей).",
      "Responsive Design":
        "Адаптивная вёрстка под мобильные устройства и планшеты.",
      "Admin Panel":
        "Панель администратора для управления товарами и категориями.",
    },
    tags: [
      "React",
      "Nest.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    imageUrl: "images/projects-previews/online-shop.png",
    githubUrl: "https://github.com/kata-front/Online-Shop"
  },
];
