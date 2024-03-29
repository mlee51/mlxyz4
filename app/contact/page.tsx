import NavigationHeader from "../NavigationHeader"
import ReturnHome from "../ReturnHome";


const Contact = () => {
    return (
        <>
            <div className="bg-[rgb(255,255,255)] relative">
                <NavigationHeader />
                <div className="grid grid-col-24 relative pt-24 px-20 sm:p-72 gap-x-vw">
                    <h1 className="capitalize relative font-bold text-neutral-200 text-4xl sm:text-7xl mb-4">let &apos; s build something toghether</h1>
                    <div className="text-neutral-300">social media</div>
                    <a href="https://www.instagram.com/michaellee.xyz" target="_blank">instagram</a>
                    <a href="https://www.linkedin.com/in/michael-lee-ab96031b0/" target="_blank">linkedin</a>
                    <a href="mailto:michael@localaxis.co">email</a>
                </div>
            </div>
            <ReturnHome />
        </>
    )
}

export default Contact;