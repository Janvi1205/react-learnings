import Navbar from "./Navbar";
import TXTcenter from "./TXTcenter";
import ImgCenter from "./ImgCenter";
const section1=()=>{
    return (
        <div>
            <Navbar/>
            <div className="flex justify-between">
                <TXTcenter/>
                <ImgCenter/>


            </div>
        </div>

    )
}
export default section1 ;