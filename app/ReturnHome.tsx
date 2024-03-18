'use client'
import Link from "@/node_modules/next/link";

const ReturnHome = () => {
    return (
        <Link href="/">
            <footer onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full bottom-0">
                <div className="text-center w-full relative py-12">back home</div>
            </footer>
        </Link>
    )
}

export default ReturnHome;