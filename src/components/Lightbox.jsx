import { AiFillCloseCircle } from "react-icons/ai"

function Lightbox ({setLightbox, img}) {

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50">
            <div className="hidden last:block relative p-5 md:p-32">
                <img src={img} alt="" className="rounded shadow"/>
                <button className="absolute top-3 right-3 md:top-24 md:right-24 bg-white rounded-full text-red-500 hover:text-red-400"
                    onClick={() => setLightbox(false)}
                ><AiFillCloseCircle size={30}/></button>
            </div>
            
        </div>
    )
}

export default Lightbox