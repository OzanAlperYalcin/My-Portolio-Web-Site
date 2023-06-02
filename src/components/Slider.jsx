import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper"

function Slider({ data, setImg, setLightbox }) {

    const openImg = (img) => {
        setImg(img)
        setLightbox(true)
    }

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {data.map((d, i) => (
                    <SwiperSlide key={i} onClick={() => openImg(d)} className="rounded-lg mt-5 cursor-pointer border-2 border-third">
                        <img src={d} alt="" className="rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider