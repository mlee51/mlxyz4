'use client'
import React, { useState, useEffect, useRef } from "react";
import NavigationHeader from "../NavigationHeader";
import ReturnHome from "../ReturnHome";
import "yet-another-react-lightbox/styles.css";
import ImageSets from "./ImageSets";
import data from '../data/data.json';
import Link from "@/node_modules/next/link";

const Work = () => {

  const [index, setIndex] = useState(0)
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [imagesLoaded, setImageLoaded] = useState<number>(0);
  const totalImages = 2;

  const trackImageLoad = () => {
    setImageLoaded(prev => prev + 1);
  }

  const setTracker = (i: number) => {
    setIndex(i)
  }
  return (
    <>
      <NavigationHeader />
      <div className={`${collapsed ? 'pt-14' : ''} flex fixed w-full z-20 flex-col transition`}>
        <div className={`${collapsed ? 'h-0 overflow-hidden' : 'pt-[4rem]'} duration-500 transition ease-in-out w-full flex space-between bg-white`} >
          <div className="flex flex-col justify-end w-full text-left p-4">
          <div className="font-medium flex flex-row w-full relative justify-between">{data[index].name}<div className="flex gap-8 text-neutral-400 flex-row-reverse">{data[index].company?.map((item,i)=>(<span key={i}>{item}</span>))}<span>{data[index].year}</span></div></div>
            <div className="mt-4 text-left text-neutral-400 relative lowercase">
              {data[index].description}
            </div>
          </div>
          <div className="flex flex-col justify-end z-30 w-full text-right pr-4 pb-4 gap-2">
            {data[index].links.map((link,i)=>(
                <a key={i} target="_blank" href={link.url} className="font-medium underline">{link.text}</a>
            ))}
            <div className="text-neutral-400 relative lowercase">
              <div className="flex gap-4 text-neutral-400 justify-end">{data[index].tags?.map((tag,i)=>(<span key={i}>{tag}</span>))}</div>
              </div>
          </div>
        </div>
        <button onClick={() => setCollapsed(prev => !prev)} className="hover:opacity-100 transition opacity-0 w-full min-h-8 relative text-sm text-neutral-400 bg-white select-none">{collapsed ? 'view info' : 'view fullscreen'}</button>
      </div>
      <main className={`${totalImages < imagesLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-500 ease-in-out flex flex-col ${collapsed ? 'pt-12' : 'pt-[22rem]'}`}>
        <div />
        <div className="grid grid-cols-12 grid-rows-max gap-1 w-full p-1 sm:p-2 sm:gap-2 [&>*]:min-h-[30vw] [&>*]:cursor-pointer">
          {data.map((item, i) => (
          <React.Fragment key={i}>
            <a id={item.name}  className="hidden absolute -top-[1000px]"/>
            <ImageSets data={item} setTracker={setTracker} projectIndex={i} onLoad={trackImageLoad} />
          </React.Fragment>
          ))}
        </div>
      </main>
      <ReturnHome />
    </>
  );
}
export default Work;