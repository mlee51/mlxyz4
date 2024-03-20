'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import RedDotComponent from './RedDotComponent'
import { useState } from 'react';

export default function NavigationHeader() {
    const pathname = usePathname()
    const [open, setOpen] = useState<boolean>(false);

    const closeMenuFromList = (route:string) => {
        if(pathname===route) setOpen(false);
    }

    return (
        <>
            <RedDotComponent />
            <header className="header fixed top-0 w-full bg-white z-30 select-none">
                <div className="relative mx-auto px-4">
                    <div className="grid-cols-24 gap-x-vw grid items-center py-3">
                        <div onClick={()=>setOpen(false)} className="col-span-12 text-sm sm:text-2xl font-bold"><Link href="/">Michael lee</Link></div>
                        <div className="col-span-12 absolute sm:relative right-2">
                            <ul className="hidden sm:flex justify-between">
                                <li><Link href={pathname === "/work" ? "/" : "/work"}>Work</Link></li>
                                <li><Link href={pathname === "/about" ? "/" : "/about"}>About</Link></li>
                                <li><a href="https://drive.google.com/file/d/1THeqdW_6leta4hrrbQGQw64uWQvEfOsN/view" target="_blank">Resume</a></li>
                                <li><Link href={pathname === "/contact" ? "/" : "/contact"}>contact</Link></li>
                            </ul>
                            <svg onClick={() => setOpen(prev => !prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:hidden w-6 h-6">
                                {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />}
                            </svg>
                        </div>
                    </div>
                    {open && <ul className="relative flex flex-col min-h-[100vh] pb-48 gap-10 text-center justify-center">
                        <li><Link onClick={()=>closeMenuFromList("/work")} href="/work">Work</Link></li>
                        <li><Link onClick={()=>closeMenuFromList("/about")} href="/about">About</Link></li>
                        <li><a href="https://drive.google.com/file/d/1THeqdW_6leta4hrrbQGQw64uWQvEfOsN/view" target="_blank">Resume</a></li>
                        <li><Link onClick={()=>closeMenuFromList("/contact")} href="/contact">contact</Link></li>
                    </ul>}
                </div>
            </header>
        </>
    )
}