'use client'
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import NavigationHeader from "./NavigationHeader";
import ReturnHome from "./ReturnHome";
export default function Home() {


  const tagMap = {
    'sl': { name: 'sum lyte', tags: ['unity', 'c#', 'raytracing', 'audio reactive'] },
    'tf': { name: 'temporary forever', tags: ['unity', 'c#', 'raytracing', 'audio reactive'] },
    'lm': { name: 'the3dapp web viewer / lavamap', tags: ['threejs', 'vue/vuex', 'glsl', 'frontend'] },
    'bp': { name: 'blue paradox by sc johnson', tags: ['unity', 'c#', 'ios', 'osc', 'madmapper'] },
    'ae': { name: 'aerobanquets by mattia casalegno', tags: ['unity', 'c#', 'glsl', 'vr', 'handtracking'] },
    'ab': { name: 'antibody club', tags: ['threejs', 'js', 'glsl'] }
  }

  const [imagesLoaded, setImageLoaded] = useState<number>(0);
  const totalImages = 2;

  const trackImageLoad = () => {
    setImageLoaded(prev => prev + 1);
  }


  return (
    <div className="bg-[rgb(255,255,255)]">
      <NavigationHeader/>
      <main className={`${totalImages === imagesLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 flex flex-col items-center justify-around`}>
        <div className="select-none relative flex flex-col justify-center min-h-[24rem] mt-20 w-full text-center">
          <div className="text-4xl sm:text-5xl font-medium mt-14">crafting pixels with purpose</div>
          <div className="mt-4 text-xl sm:text-2xl text-neutral-400 space-around mx-auto relative lowercase">
            creative technologist / full stack dev
          </div>
        </div>
        <div className="grid grid-col-24 gap-2 w-full p-2 [&>*]:cursor-pointer">
          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-2/3 relative inline-block">
              <Overlay data={tagMap['sl']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" onLoad={trackImageLoad} priority alt='image' className="group object-cover" fill src='/sl/1.webp' />
            </a>
            <a className="w-full relative">
              <Overlay data={tagMap['tf']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" onLoad={trackImageLoad} priority alt='image' fill className="object-cover" src='/tf/1.webp' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-full relative">
              <Overlay data={tagMap['lm']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/images/lava/2.webp' />
            </a>
            <a className="w-5/6 relative bg-red-500">
              <Overlay data={tagMap['lm']} />
              <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop src='/images/lava/1.webm' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="min-w-[50vh] relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/2.webp' />
            </a>
            <a className="w-full relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/1.webp' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-2/3 relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/3.webp' />
            </a>
            <a className="w-full relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/4.webp' />
            </a>
          </div>
          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-full relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/4.webp' />
            </a>
            <a className="w-full relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/2.webp' />
            </a>
          </div>
          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-full relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/3.webp' />
            </a>
            <a className="w-2/3 relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/1.webp' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-2/3 relative">
              <Overlay data={tagMap['ab']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/images/ab/1.webp' />
            </a>
            <a className="w-full relative">
              <Overlay data={tagMap['ab']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/images/ab/4.gif' />
            </a>

          </div>


        </div>
      </main>

      <ReturnHome/>
    </div>
  );
}
