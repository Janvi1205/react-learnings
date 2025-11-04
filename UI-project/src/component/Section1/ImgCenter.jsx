
const ImgCenter = ({ prop }) => {


    return (
        <div className="overflow-hidden h-screen flex items-center ">
            <div className="flex gap-5 overflow-x-auto overflow-y-hidden flex-nowrap px-10 no-scrollbar ">
                {prop.map(function (elem) {
                    return (

                    
                        <div className="relative w-80 shrink-0">
                            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                            <div className="rounded-4xl h-10 w-10 bg-white absolute flex justify-center items-center font-medium text-2xl mt-7 ml-5 z-10">
                                1
                            </div>
                            <img
                                className="h-150 w-80 rounded-2xl object-cover"
                                src={elem.image}
                                alt=""
                            />
                             
                            <div className="absolute bottom-20 left-5 right-5 text-white font-semibold text-[18px] z-10 leading-snug">
                                {elem.text}
                            </div>
                            
                            <button className="bg-orange-600 p-3 -mt-17 ml-4 absolute w-[290px] text-white rounded-4xl text-xl z-10">
                                {elem.review}
                            </button>
                        </div>



                    )
                })}

            </div>





        </div>


    )
}
export default ImgCenter