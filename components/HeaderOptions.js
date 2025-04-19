
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useParams, usePathname, useSearchParams } from "next/navigation";

function HeaderOptions({ serp }) {
  const params = useSearchParams()
  const path = usePathname()
  return (
    <div>
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 boarer-b font-OpenSans">
      <div className="flex space-x-6">
        {params.get("images") !== "yes" && serp ? (
          <HeaderOption Icon={SearchIcon} title="Web (API 1)" selected />
        ) : (
          <a href={'/searchs' + "?" + params.toString().split("&images=yes")[0]}>
          {" "}
          <HeaderOption Icon={SearchIcon} title="Web (API 2)" />
          </a>

        )}
         {params.get("images") !== "yes" && !serp ? (
          <HeaderOption Icon={SearchIcon} title="Web (API 2)" selected />
        ) : (
          <a href={'/search' + "?" + params.toString().split("&images=yes")[0]}>
          {" "}
          <HeaderOption Icon={SearchIcon} title="Web (API 2)" />
          </a>

        )}
        {params.get("images") === "yes" ? (
          <HeaderOption Icon={PhotographIcon} title="Images" selected />
        ) : (
          <a href={'/search' + "?" + params.toString() + "&images=yes"}>
          {" "}
          <HeaderOption Icon={PhotographIcon} title="Images" />
        </a>
          
        )}{/*
        <a href="https://www.youtube.com">
          {" "}
          <HeaderOption Icon={PlayIcon} title="Videos" />
        </a>
        <a href="https://news.google.com">
          {" "}
          <HeaderOption Icon={NewspaperIcon} title="News" />
        </a>*/}
        {/*<a href="https://www.rafdo.rf.gd/app/maps/">
          {" "}
          <HeaderOption Icon={MapIcon} title="Maps" />
        </a>*/}{/*
        <a href="">
          {" "}
          <HeaderOption Icon={DotsVerticalIcon} title="More" />
        </a>*/}
      </div>
          {/*
      <div className="flex space-x-4">
        <a href="#">
          <p className="link">Settings</p>
        </a>
        <p className="link">Tools</p>
      </div>*/}
    </div></div>
  );
}

export default HeaderOptions;
