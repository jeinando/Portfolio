"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center py-20 fade-in-up"
    >
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        Software developer focused on creating modern and efficient experiences
        using Next.js, Tailwind CSS, and TypeScript.
      </p>
      <div className="flex gap-4">
        <a
          href="#DownloadCV"
          className="px-6 py-3 text-lg rounded-xl bg-gray-800/15 hover:bg-gray-700 transition"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 text-lg rounded-xl bg-gray-800/15 hover:bg-gray-700 transition"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
