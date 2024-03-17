'use client'
import Image from "@/node_modules/next/image";
import { useState, useEffect, useRef } from "react";
import Overlay from "../components/Overlay";
import NavigationHeader from "../NavigationHeader";
import ReturnHome from "../ReturnHome";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LavaImages from "./LavaImages";
import BPImages from "./BPImages";
import data from '../data/data.json';

const Work = () => {

  const [index, setIndex] = useState(0)
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const setTracker = (i: number) => {
    setIndex(i)
  }
  return (
    <>
      <NavigationHeader />
      <div className={`${collapsed? 'pt-14':''} flex fixed w-full z-20 flex-col`}>
        <div className={`${collapsed ? 'h-0 overflow-hidden' : 'pt-[4rem]'} duration-500 transition ease-in-out w-full flex space-between bg-white`} >
          <div className="flex flex-col justify-end w-full text-left p-4">
            <div className="font-medium ">{data[index].name}</div>
            <div className="mt-4 text-left text-neutral-400 relative lowercase">
              {data[index].description}
            </div>
          </div>
          <div className=" flex flex-col justify-end z-30 min-h-[24rem] w-full text-right p-4">
            <div className="font-medium mt-14">the 3dapp viewer at lavamap</div>
            <div className="mt-4  text-neutral-400 relative lowercase">
              creative technologist / full stack dev
              </div>
          </div>
        </div>
        <button onClick={() => setCollapsed(prev => !prev)} className="hover:opacity-100 transition opacity-0 w-full min-h-8 relative text-sm text-neutral-400 bg-white select-none">{collapsed? 'view info':'view fullscreen'}</button>
      </div>
      <main className={`transition-all duration-500 ease-in-out flex flex-col ${collapsed ? 'pt-12' : 'pt-[28rem]'}`}>
        <div />
        <div className="grid grid-cols-12 grid-rows-max gap-1 w-full p-1 sm:p-2 sm:gap-2 [&>*]:min-h-[30vw] [&>*]:cursor-pointer">
          {data.map((item, i) => (
            <BPImages key={i} data={item} setTracker={setTracker} projectIndex={i} />
          ))}
        </div>
      </main>
      <ReturnHome />
    </>
  );
}
export default Work;