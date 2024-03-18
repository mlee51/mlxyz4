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
      <NavigationHeader />
      <main className={`${totalImages === imagesLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 flex flex-col items-center justify-around`}>
        <div className="select-none relative flex sm:pt-64 sm:pb-36 flex-col w-full text-center">
          <div className="text-4xl sm:text-5xl font-medium ">crafting pixels with purpose</div>
          <div className="mt-4 text-xl sm:text-2xl text-neutral-400 space-around mx-auto relative lowercase">
            creative technologist / full stack dev
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-min gap-1 w-full p-1 sm:p-2 sm:gap-2 [&>*]:min-h-[30vw] [&>*]:cursor-pointer">
          <Link href="/work/#temporary forever" passHref legacyBehavior>
            <a className="col-span-4 relative ">
              <Overlay data={tagMap['sl']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" onLoad={trackImageLoad} priority alt='image' className="group object-cover" fill src='/sl/1.webp' />
            </a>
          </Link>

          <Link href="/work/#temporary forever" passHref legacyBehavior>
            <a className="col-span-8 relative">
              <Overlay data={tagMap['tf']} />
              <Image sizes="(max-width: 768px) 100vw, 66vw" onLoad={trackImageLoad} priority alt='image' fill className="object-cover" src='/tf/1.webp' />
            </a>
          </Link>

          <Link href="/work/#the blue paradox" passHref legacyBehavior>
            <a className="col-span-3 relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/2.webp' />
            </a>
          </Link>

          <Link href="/work/#the blue paradox" passHref legacyBehavior>
            <a className="col-span-9 relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/1.webp' />
            </a>
          </Link>

          <Link href="/work/#the blue paradox" passHref legacyBehavior>
            <a className="col-span-4 relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/3.webp' />
            </a>
          </Link>

          <Link href="/work/#the blue paradox" passHref legacyBehavior>
            <a className="col-span-8 relative">
              <Overlay data={tagMap['bp']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/bp/4.webp' />
            </a>
          </Link>

          <Link href="/work/#the3dapp" passHref legacyBehavior>
            <a className="col-span-5 relative">
              <Overlay data={tagMap['lm']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/images/lava/2.webp' />
            </a>
          </Link>

          <Link href="/work/#the3dapp" passHref legacyBehavior>
            <a className="col-span-7 relative bg-white">
              <Overlay data={tagMap['lm']} />
              <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop src='/images/lava/1.webm' />
            </a>
          </Link>

          <Link href="/work/#aerobanquets" passHref legacyBehavior>
            <a className="col-span-7  relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/2.webp' />
            </a>
          </Link>

          <Link href="/work/#aerobanquets" passHref legacyBehavior>
            <a className="col-span-5  relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/4.webp' />
            </a>
          </Link>

          <Link href="/work/#aerobanquets" passHref legacyBehavior>
            <a className="col-span-5 relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/1.webp' />
            </a>
          </Link>

          <Link href="/work/#aerobanquets" passHref legacyBehavior>
            <a className="col-span-7 relative">
              <Overlay data={tagMap['ae']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/aero/3.webp' />
            </a>
          </Link>

          <Link href="/work/#antibody club" passHref legacyBehavior>
            <a className="col-span-6 relative">
              <Overlay data={tagMap['ab']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/images/ab/1.webp' />
            </a>
          </Link>

          <Link href="/work/#antibody club" passHref legacyBehavior>
            <a className="col-span-6 relative">
              <Overlay data={tagMap['ab']} />
              <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/images/ab/4.gif' />
            </a>
          </Link>

        </div>
      </main>

      <ReturnHome />
    </div>
  );
}
