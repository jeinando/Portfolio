import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Jacob Tellez
        </Link>
        <nav className="flex space-x-4">
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 md:px-4 md:py-2 hover:bg-gray-700 md:rounded-2xl border border-transparent hover:border-gray-500 transition-all min-h-[50px] md:text-base px-5 py-4 text-xl duration-300 w-full bg-gray-800/15"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              ></path>
              <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
              <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
            </svg>
            About Me
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 md:px-4 md:py-2 hover:bg-gray-700 md:rounded-2xl border border-transparent hover:border-gray-500 transition-all min-h-[50px] md:text-base px-5 py-4 text-xl duration-300 w-full bg-gray-800/15"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              ></path>
              <path d="M12 5v14l9-7z"></path>
            </svg>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
