import Image from "@/node_modules/next/image";
import Lightbox from "@/node_modules/yet-another-react-lightbox/dist/index";
import { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import Overlay from "../components/Overlay";
import Video from "yet-another-react-lightbox/plugins/video";

export default function ImageSets({ setTracker, data, projectIndex, onLoad }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const { imageUrls, imageSpan, tags, name } = data;
    const { ref, inView, entry } = useInView({
        /* Optional options */

        threshold: 1,
    });
    const hasWebm = hasWebmUrls(imageUrls);

    const expandImage = (i) => {
        setIndex(i)
        setOpen(true);
    }

    useEffect(() => {
        if (inView) setTracker(projectIndex)
    }, [inView,setTracker,projectIndex])


    function parseImageStrings(imageArray) {
        return imageArray.map((imagePath) => {
            const slide = imagePath.endsWith('.webm') ? {
                sources: [{
                    src:
                        imagePath,
                    type: "video/webm"
                }], type: "video"
            } : { src: imagePath }
            return slide;
        });
    }

    function hasWebmUrls(imageUrls) {
        return imageUrls.some(url => url.endsWith('.webm'));
    }



    return (
        <>
            {imageUrls.map((item, i) => (
                <a ref={i === 0 ? ref : null} key={i} onClick={() => expandImage(i)} className={`relative ${imageSpan[i]}`}>
                    <Overlay data={{ 'tags': tags, 'name': name }} />
                    {item.endsWith('.webm') ? ( // Check if item ends with .webm indicating it's a video
                        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop src={item} />
                    ) : (
                        <Image onLoad={onLoad} sizes="(max-width: 768px) 100vw, 66vw" alt='image' fill className="object-cover" src={item} />
                    )}
                </a>
            ))}
           
            <Lightbox
                plugins={[Video]}
                video={{
                    controls: true,
                    playsInline: true,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    disablePictureInPicture: true,
                    disableRemotePlayback: true,
                }}
                index={index}
                open={open}
                close={() => setOpen(false)}
                slides={parseImageStrings(imageUrls)}
            />
        </>
    );
}
