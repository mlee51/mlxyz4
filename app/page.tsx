import Image from "next/image";
import Overlay from "./components/Overlay";
import RedDotComponent from './RedDotComponent'
export default function Home() {

  const tagMap = {
    'sl': {name:'sum lyte',tags:['unity', 'c#', 'raytracing', 'audio reactive']},
    'tf': {name:'temporary forever',tags:['unity', 'c#', 'raytracing', 'audio reactive']},
    'lm': {name:'the3dapp web viewer / lavamap',tags:['threejs', 'vue/vuex', 'glsl' , 'frontend']},
    'bp': {name:'blue paradox by sc johnson',tags:['unity', 'c#','ios', 'osc', 'madmapper']},
    'ae': {name:'aerobanquets by mattia casalegno',tags:['unity','c#','glsl','vr','handtracking']},
    'ab': {name:'antibody club',tags:['threejs','js','glsl']}
  }

  return (
    <div className="bg-[rgb(255,255,255)]">
      <RedDotComponent />
      <header className="fixed w-full bg-white z-40">
     
        <div className="relative mx-auto px-5">
          <div className="grid-cols-24 gap-x-vw grid items-center py-3">
            <div className="col-span-12 text-2xl font-bold">Michael Lee</div>
            <div className="col-span-12">
              <ul className="hidden sm:flex justify-between">
                <li>Work</li>
                <li>About</li>
                <li><a href="https://drive.google.com/file/d/1nuAWb5EGPfX37zLz7MV0FFChy4_ivJo8/view" target="_blank">Resume</a></li>
                <li>contact</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex flex-col items-center justify-around ">
        <div className="relative flex flex-col justify-center min-h-[25rem] mt-20 w-full text-center">
          <div className="text-4xl sm:text-5xl font-medium mt-14">crafting pixels with purpose</div>
          <div className="mt-4 text-xl sm:text-2xl text-neutral-400 space-around mx-auto relative lowercase">
            creative technologist / full stack dev
          </div>
        </div>
        <div className="grid grid-col-24 gap-2 w-full p-2">
          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-2/3 relative inline-block">
              <Overlay data={tagMap['sl']} />
              <Image alt='image' className="group" fill objectFit='cover' src='/sl/1.jpg' />
            </a>
            <a className="w-full relative">
              <Overlay data={tagMap['tf']} />
              <Image alt='image' fill objectFit='cover' src='/tf/1.jpg' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-full relative">
              <Overlay data={tagMap['lm']} />
              <Image alt='image' fill objectFit='cover' src='/images/lava/2.webp' />
            </a>
            <a className="w-5/6 relative bg-red-500">
            <Overlay data={tagMap['lm']} />
              <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop src='/images/lava/1.webm' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="min-w-[50vh] relative">
            <Overlay data={tagMap['bp']} />
              <Image alt='image' fill objectFit='cover' src='/bp/2.jpg' />
            </a>
            <a className="w-full relative">
            <Overlay data={tagMap['bp']} />
              <Image alt='image' fill objectFit='cover' src='/bp/1.jpg' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-2/3 relative">
            <Overlay data={tagMap['bp']} />
              <Image alt='image' fill objectFit='cover' src='/bp/3.jpg' />
            </a>
            <a className="w-full relative">
            <Overlay data={tagMap['bp']} />
              <Image alt='image' fill objectFit='cover' src='/bp/4.jpg' />
            </a>
          </div>
          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-full relative">
            <Overlay data={tagMap['ae']} />
              <Image alt='image' fill objectFit='cover' src='/aero/4.jpg' />
            </a>
            <a className="w-full relative">
            <Overlay data={tagMap['ae']} />
              <Image alt='image' fill objectFit='cover' src='/aero/2.jpg' />
            </a>
          </div>
          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-full relative">
            <Overlay data={tagMap['ae']} />
              <Image alt='image' fill objectFit='cover' src='/aero/3.jpg' />
            </a>
            <a className="w-2/3 relative">
            <Overlay data={tagMap['ae']} />
              <Image alt='image' fill objectFit='cover' src='/aero/1.jpg' />
            </a>
          </div>

          <div className="flex gap-2 min-h-[33rem]">
            <a className="w-2/3 relative">
            <Overlay data={tagMap['ab']} />
              <Image alt='image' fill objectFit='cover' src='/images/ab/1.webp' />
            </a>
            <a className="w-full relative">
            <Overlay data={tagMap['ab']} />
              <Image alt='image' fill objectFit='cover' src='/images/ab/4.gif' />
            </a>

          </div>


        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
