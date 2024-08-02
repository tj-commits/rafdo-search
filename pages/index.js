import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  const imFeelingLucky = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/imfeelinglucky?term=${term}&start=0`);
  };
  

  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Rafdo Search</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      {/* header */}

      <header className="flex w-full p-5 justify-between text-sm text-gray-800">
        {/*left section*/}
        <div className="flex space-x-4 items-center font-Ubuntu">
          <a href="https://www.rafdo.rf.gd">
            <p className="link">Home</p>
          </a>
        </div>

        {/*right section*/}
        <div className="flex space-x-4 font-Ubuntu items-center">
          <a href="https://gamesfromrafdo.weebly.com">
            <p className="link">Games</p>
          </a>

          {/*Icons*/}
          <a href="https://www.rafdo.rf.gd/products"><ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" /></a>

          
        </div>
      </header>

      {/*body*/}
      <form className="flex flex-col items-center pt-3 flex-grow w-4/5">
        <Image
          src="/images/logo.png"
          width={300}
          height={50}
          priority
        />
        <br />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-700" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
          <button onClick={search} className="btn">
            Search
          </button>

          <button onClick={imFeelingLucky} className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
