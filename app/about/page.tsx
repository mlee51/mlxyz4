import NavigationHeader from "../NavigationHeader"
import ReturnHome from "../ReturnHome"


const About = () => {
    return (
        <>
            <NavigationHeader />
            <div className="bg-[rgb(255,255,255)] relative">

                <div className="grid grid-col-24 relative pt-72 pl-4 gap-x-vw">
                    <div className="lowercase text-8xl">
                        Hello, I&apos;m a fullstack engineer / creative technologist based in NYC. I love creating realtime applications and 3d graphics.
                    I also run <a className="text-neutral-400" href="https://localaxis.co" target="_blank">localaxis</a>, a creative studio and <a className="text-neutral-400" href="https://music.localaxis.co" target="_blank">record label</a>.
                </div>
                </div>
                <ReturnHome />
            </div>
        </>
    )
}

export default About;