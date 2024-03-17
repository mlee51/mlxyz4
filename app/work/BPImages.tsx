import Image from "@/node_modules/next/image";
import Lightbox from "@/node_modules/yet-another-react-lightbox/dist/index";
import { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import Overlay from "../components/Overlay";


export default function BPImages({ setTracker, data, projectIndex }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const {imageUrls, imageSpan, tags, name} = data;
    const { ref, inView, entry } = useInView({
        /* Optional options */

        threshold: 1,
    });

    const expandImage = (i: number) => {
        setIndex(i)
        setOpen(true);
    }

    useEffect(() => {
        if (inView) setTracker(projectIndex)
    }, [inView])

   
    function parseImageStrings(imageArray) {
        return imageArray.map((imagePath) => {
          return { src: imagePath };
        });
      }

   

    return (
        <>
            {imageUrls.map((item,i) => (
                <a ref={i===0?ref:null} key={i} onClick={() => expandImage(i)} className={`relative ${imageSpan[i]}`}>
                    <Overlay data={{'tags':tags,'name':name}} />
                    <Image sizes="(max-width: 768px) 100vw, 66vw" alt='image' fill className="object-cover" src={item} />
                </a>
            ))}
            <Lightbox
                index={index}
                open={open}
                close={() => setOpen(false)}
                slides={parseImageStrings(imageUrls)}
            />
        </>
    );
}
