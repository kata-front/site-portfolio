import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiMail, FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const emailRef = useRef<HTMLDivElement>(null);
  const telegramRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);

  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
    },
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom bottom",
      scrub: 2,
    },
    });
    tl.fromTo(
      emailRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
      .fromTo(
        telegramRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4",
      )
      .fromTo(
        githubRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4",
      )
      .fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4",
      );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    message: string;
  }>();

  const onSubmit = handleSubmit((data) => {
    const subject = `Сообщение от ${data.name}`;
    const body = `Имя: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;

    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailtoLink)
  });

  return (
    <section
      ref={containerRef}
      id="contacts"
      className="min-h-screen flex items-center justify-center bg-black py-24 px-4"
    >
      <div className="max-w-2xl w-full text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
        <p className="text-lg text-gray-400 mb-12">
          Напишите мне на почту или в Telegram
        </p>

        <div className="space-y-6 mb-12">
          <div
            ref={emailRef}
            className="flex items-center justify-center gap-3"
          >
            <FiMail className="w-5 h-5 text-indigo-400" />
            <a
              href="mailto:kirill.nenashew2000@gmail.com"
              className="text-xl text-gray-200 hover:text-indigo-300 transition"
            >
              kirill.nenashew2000@gmail.com
            </a>
          </div>

          <div
            ref={telegramRef}
            className="flex items-center justify-center gap-3"
          >
            <FiSend className="w-5 h-5 text-indigo-400" />
            <a
              href="https://t.me/kirilnen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-200 hover:text-indigo-300 transition"
            >
              @kirilnen
            </a>
          </div>

          <div
            ref={githubRef}
            className="flex items-center justify-center gap-3"
          >
            <BsGithub className="w-5 h-5 text-indigo-400" />
            <a
              href="https://github.com/kata-front"
              className="text-xl text-gray-200 hover:text-indigo-300 transition"
            >
              kata-front
            </a>
          </div>
        </div>

        <div ref={formRef} className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
          <form className="space-y-4" onSubmit={onSubmit}>
            <input
              {...register("name", { required: "Это поле обязательно" })}
              type="text"
              placeholder="Ваше имя"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
            <span className="text-red-500 mb-5">{errors.name?.message}</span>
            <input
              {...register("email", {
                required: "Это поле обязательно",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Некорректный адрес электронной почты",
                },
              })}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
            <span className="text-red-500 mb-5">{errors.email?.message}</span>
            <textarea
              {...register("message", { required: "Это поле обязательно" })}
              rows={4}
              placeholder="Сообщение"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-none"
            />
            <span className="text-red-500 mb-5">{errors.message?.message}</span>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold transition"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
