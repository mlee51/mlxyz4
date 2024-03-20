import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Image from "@/node_modules/next/image";
import Lightbox from "@/node_modules/yet-another-react-lightbox/dist/index";
import Video from "yet-another-react-lightbox/plugins/video";
import Overlay from "../components/Overlay";

export default function ImageSets({ setTracker, data, projectIndex, onLoad }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const { imageUrls, imageSpan, tags, name } = data;
    const { ref, inView } = useInView({
        threshold: 1,
        rootMargin: "0px 0px -50% 0px",
    });
    const hasWebm = hasWebmUrls(imageUrls);

    useEffect(() => {
        if (inView) setTracker(projectIndex);
    }, [inView, setTracker, projectIndex]);

    function filterImageUrls(imageArray) {
        const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;
        return imageArray.filter(item => !(item.endsWith('.webm') && isMobile));
    }

    function parseImageStrings(imageArray) {
        return imageArray.map((imagePath) => {
            const slide = imagePath.endsWith('.webm') ? {
                sources: [{
                    src: imagePath,
                    type: "video/webm"
                }], type: "video"
            } : { src: imagePath };
            return slide;
        });
    }

    function hasWebmUrls(imageUrls) {
        return imageUrls.some(url => url.endsWith('.webm'));
    }

    const filteredImageUrls = filterImageUrls(imageUrls);

    const expandImage = (i) => {
        setIndex(i);
        setOpen(true);
    }

    return (
        <>
            {filteredImageUrls.map((item, i) => (
                <a ref={i === 0 ? ref : null} key={i} onClick={() => expandImage(i)} className={`relative col-span-12 sm:${imageSpan[i]}`}>
                    <Overlay data={{ 'tags': tags, 'name': name }} />
                    {item.endsWith('.webm') ? (
                        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop src={item} />
                    ) : (
                        <Image onLoad={onLoad} sizes="(max-width: 768px) 100vw, 66vw" alt='image' fill className="object-cover" src={item} />
                    )}
                </a>
            ))}

            <Lightbox
                plugins={hasWebm ? [Video] : []}
                video={hasWebm ? {
                    controls: true,
                    playsInline: true,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    disablePictureInPicture: true,
                    disableRemotePlayback: true,
                } : {}}
                index={index}
                open={open}
                close={() => setOpen(false)}
                slides={parseImageStrings(filteredImageUrls)}
            />
        </>
    );
}
