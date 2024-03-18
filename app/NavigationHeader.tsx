'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import RedDotComponent from './RedDotComponent'

export default function NavigationHeader() {
    const pathname = usePathname()

    return (
        <>
            <RedDotComponent />
            <header className="header fixed top-0 w-full bg-white z-30 select-none">
                <div className="relative mx-auto px-5">
                    <div className="grid-cols-24 gap-x-vw grid items-center py-3">
                        <div className="col-span-12 text-2xl font-bold"><Link href="/">Michael Lee</Link></div>
                        <div className="col-span-12">
                            <ul className="hidden sm:flex justify-between">
                                <li><Link href={pathname === "/work" ? "/" : "/work"}>Work</Link></li>
                                <li><Link href={pathname === "/about" ? "/" : "/about"}>About</Link></li>
                                <li><a href="https://drive.google.com/file/d/1nuAWb5EGPfX37zLz7MV0FFChy4_ivJo8/view" target="_blank">Resume</a></li>
                                <li><Link href={pathname === "/contact" ? "/" : "/contact"}>contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}