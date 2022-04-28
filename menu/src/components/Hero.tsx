import Img from "./Img"
import Menu from "./Menu"


const Hero = () =>{
    return(
        <div className={`h-screen bg-black`}>
            <Img/>
            <div className="flex flex-nowrap justify-between items-center">
                <Menu/>
            </div>
        </div>
    )
}

export default Hero