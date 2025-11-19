import Navbar from "./Navbar";
import TXTcenter from "./TXTcenter";
import ImgCenter from "./ImgCenter";
const section1=(props)=>{
    
    return (
        <div>
            <Navbar/>
            <div className="flex justify-between">
                <TXTcenter/>
                <ImgCenter prop={props.reviews}/>
            </div>
        </div>

    )
}
export default section1 ;