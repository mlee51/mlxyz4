import Image from "@/node_modules/next/image";
import Overlay from "../components/Overlay";
import NavigationHeader from "../NavigationHeader";
import ReturnHome from "../ReturnHome";

const Work = () => {
    return (
        <div className="bg-[rgb(255,255,255)]">
          <NavigationHeader/>
          <main className="flex flex-col ">
              <div className="w-full flex space-between fixed z-20  min-h-[24rem] p-4  bg-white">
          <div className="select-none flex flex-col justify-end mt-20 w-full text-left">
              <div className="font-medium mt-14">3d web viewer at lavamap</div>
              <div className="mt-4 text-left text-neutral-400 relative lowercase">
              Developed a 3D realtime web viewer tailored for immersive exploration of residential and commercial real estate, seamlessly integrating panoramas and LiDAR meshes. Spearheaded the development of new features and tools using threejs, optimizing performance and loadtimes through meticulous codebase refactoring. Crafted custom GLSL shaders and leveraged Google Firebase cloud functions for efficient data management. Orchestrated a cross-functional team of engineers and product designers while developing a user-friendly interface using vue/vuex.
              </div>
            </div>
            <div className="select-none flex flex-col justify-end z-30 mt-20 w-full text-right">
              <div className="font-medium mt-14">the 3dapp viewer at lavamap</div>
              <div className="mt-4  text-neutral-400 relative lowercase">
                creative technologist / full stack dev
              </div>
            </div>
            </div>
            <div className='min-h-[29rem]'/>
            <div className="grid grid-col-24 gap-2 w-full p-2 z-0 [&>*]:cursor-pointer">
              <div className="flex gap-2 min-h-[33rem]">
                  
                <a className="w-[46rem] relative inline-block">
                  {/* <Overlay data={tagMap['sl']} /> */}
                  <Image sizes="(max-width: 768px) 100vw, 33vw"  alt='image' className="group object-cover" fill src='/images/lava/2.webp' />
                </a>
                <a className="w-full max-w-[47vw] relative">
                  {/* <Overlay data={tagMap['tf']} /> */}
                  <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop src='/images/lava/1.webm' />
                </a>
              </div>

              <div className="flex gap-2 min-h-[33rem]">
                  
                  <a className="w-[46rem] relative inline-block">
                    {/* <Overlay data={tagMap['sl']} /> */}
                    <Image sizes="(max-width: 768px) 100vw, 33vw"  alt='image' className="group object-cover" fill src='/images/lava/1.webp' />
                  </a>
                  
                </div>
             
             <ReturnHome/> 
            </div>
          </main>
        </div>
      );
}
export default Work;