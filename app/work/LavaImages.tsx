import Image from "@/node_modules/next/image";
import Lightbox from "@/node_modules/yet-another-react-lightbox/dist/index";
import { useState, useEffect, useRef } from "react";
import Video from "yet-another-react-lightbox/plugins/video";
import { useInView } from 'react-intersection-observer';

export default function LavaImages({ setTracker }) {
    const [open, setOpen] = useState(false);

    const [controls, setControls] = useState(true);
    const [playsInline, setPlaysInline] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    const [loop, setLoop] = useState(false);
    const [muted, setMuted] = useState(false);
    const [disablePictureInPicture, setDisablePictureInPicture] = useState(false);
    const [disableRemotePlayback, setDisableRemotePlayback] = useState(false);
    const [controlsList, setControlsList] = useState<("nodownload" | "nofullscreen" | "noremoteplayback")[]>([]);
    const [crossOrigin, setCrossOrigin] = useState("");
    const [preload, setPreload] = useState("");
    const [index, setIndex] = useState(0);

    const { ref, inView, entry } = useInView({
        threshold: 1,
    });

    const expandImage = (i: number) => {
        setIndex(i)
        setOpen(true);
    }

    useEffect(() => {
        if (inView) setTracker(0)
    }, [inView])
    return (
        <>
            <a ref={ref} onClick={() => expandImage(0)} className="col-span-5 relative">
                <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' fill className="object-cover" src='/images/lava/2.webp' />
            </a>
            <a onClick={() => expandImage(1)} className="col-span-7 relative bg-white">
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop src='/images/lava/1.webm' />
            </a>
            <a onClick={() => expandImage(2)} className="relative col-span-12 row-span-2 inline-block">
                <Image sizes="(max-width: 768px) 100vw, 33vw" alt='image' className="group object-cover" fill src='/images/lava/1.webp' />
            </a>
            <Lightbox
                index={index}
                open={open}
                close={() => setOpen(false)}
                plugins={[Video]}
                video={{
                    controls,
                    playsInline,
                    autoPlay,
                    loop,
                    muted,
                    disablePictureInPicture,
                    disableRemotePlayback,
                    controlsList: controlsList.join(" "),
                    crossOrigin,
                    preload,
                }}
                slides={[
                    { src: "/images/lava/2.webp" },
                    {
                        sources: [{
                            src:
                                "/images/lava/1.webm",
                            type: "video/webm"
                        }], type: "video"
                    },
                    { src: "/images/lava/1.webp" },
                ]}
            />
        </>
    );
}
