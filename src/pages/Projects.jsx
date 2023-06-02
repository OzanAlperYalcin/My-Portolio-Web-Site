import { useState } from "react"
import Section from "../components/Section"
import Slider from "../components/Slider"
import Lightbox from "../components/Lightbox"
import { cms, player } from "../utils/projectsData"
import { useNavigate } from "react-router-dom"

function Projects() {

    const [lightbox, setLightbox] = useState(false)
    const [img, setImg] = useState("")
    const navigate = useNavigate()

    return (
        <>
            {lightbox && <Lightbox setLightbox={setLightbox} img={img} />}
            <div className="grid gap-y-10">
                <Section
                    title={"Projects."}
                    description={"On this page, there are only projects that I have coded and developed alone. Your feedback about my projects is important to me.."}
                />
                <div className="container mx-auto grid gap-10 grid-cols-2">
                    <div className="border rounded-lg border-sky-300/20 p-10 lg-p-14 col-span-2 md:col-span-1">
                        <h1 className="text-xl font-light border-b">Social Media CMS</h1>
                        <Slider 
                            data={cms}
                            setImg={setImg}
                            setLightbox={setLightbox}
                        />
                        <h2 className="text-sm font-semibold border-b w-fit mt-5">Description</h2>
                        <p className="text-sm font-light text-gray-400">
                            A simple cms system where a social media agency can report the progress of their accounts to its customers, see the list of services received and check the balance.
                        </p>
                        <div className="flex justify-end mt-5">
                            <button onClick={() => navigate("/contact")} className="btn-secondary text-xs">Contact with me to view project.</button>
                        </div>
                    </div>
                    <div className="border rounded-lg border-lime-300/20 p-10 lg-p-14 col-span-2 md:col-span-1">
                        <h1 className="text-xl font-light border-b">Music Player</h1>
                        <Slider 
                            data={player}
                            setImg={setImg}
                            setLightbox={setLightbox}
                        />
                        <h2 className="text-sm font-semibold border-b w-fit mt-5">Description</h2>
                        <p className="text-sm font-light text-gray-400 ">
                            A simple music player application coded with vanilla Javascript to improve myself when I learn Javascript. It has been a simple but very useful project for me.
                        </p>
                        <div className="flex justify-end mt-5">
                            <a href="http://alperyalcin.com.tr/player/" className="btn-secondary text-xs">Click here to view project.</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects