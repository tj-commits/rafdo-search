import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header({ term, serp }) {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [stateTerm, setStateTerm] = useState(term)

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(serp ? `/searchs?term=${term}&start=0` : `/search?term=${term}&start=0`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="/images/logo.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex flex-grow px-5 py-3 ml-10 mr-5 border boder-gray-200 rounded-full shadow-lg max-w-3xl items-center ">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none "
            type="text"
            value={stateTerm}
            onChange={() => setStateTerm(searchInputRef.current.value)}
          />

          <button type="submit" onClick={search}>
            <SearchIcon className=" mb-1 h-5 hidden sm:inline-flex text-gray-500 tarnsition duration-100 transform hover:scale-125 " />
          </button>
        </form>
      </div>
      <HeaderOptions serp={serp} />
    </header>
  );
}

export default Header;
