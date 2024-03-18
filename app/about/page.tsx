import NavigationHeader from "../NavigationHeader"
import ReturnHome from "../ReturnHome"


const About = () => {
    return (
        <>
            <NavigationHeader />

            <div className="w-full pt-72 relative">
                <div className="lowercase text-8xl relative left-1/4 w-3/4">
                    Hello, I&apos;m a fullstack engineer / creative technologist based in NYC. I love creating realtime applications and 3d graphics.
                    I also run <a className="text-neutral-400" href="https://localaxis.co" target="_blank">localaxis</a>, a creative studio and <a className="text-neutral-400" href="https://music.localaxis.co" target="_blank">record label</a>.
                </div>
            </div>
            <ReturnHome />

        </>
    )
}

export default About;