import Title from "./Title"
import { skills } from "../utils/skills"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper"
import "swiper/css/pagination"
import "swiper/css/navigation"
import 'swiper/css'
import './styles.css'

function Skills() {

    return (
        <>
            <div className="container mx-auto">
                <Title>Skills</Title>
                <div className="border border-white/20 rounded-lg p-6 lg:p-10 relative">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: '.swiper-pagination-custom',
                            dynamicBullets: true,
                            clickable: true
                        }}
                        modules={[Autoplay, Pagination]}
                        spaceBetween={1}
                        slidesPerView={1}
                        breakpoints={{
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            770: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            }
                        }}
                    >
                        {skills.map((skill, i) => (
                            <SwiperSlide key={i} className="flex flex-col flex-shrink-0 gap-y-3 border border-white/20 rounded-lg py-6 px-14">
                                <div className={`flex items-center justify-center mx-auto border rounded-full w-28 h-28 ${skill.color[3]} relative`}>
                                    <skill.icon size={50} className={`${skill.color[2]}`} />
                                    <div className={`absolute -top-1.5 -right-1.5 w-24 h-24 ${skill.color[1]} rounded-full`} />
                                </div>
                                <span className={`${skill.color[0]} mx-auto px-4 py-1 rounded-lg text-sm text-center`}>{skill.name}</span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination-custom absolute" />
                </div>
            </div>
        </>
    )
}

export default Skills