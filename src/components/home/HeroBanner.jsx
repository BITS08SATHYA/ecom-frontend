// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

import { bannerLists } from "../../utils/index.js";



// Import Swiper styles
import 'swiper/css';
import {Autoplay, EffectFade, Pagination , Navigation} from "swiper/modules";
import {Link} from "react-router-dom";


// const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];
const colors = ["bg-amber-500", "bg-red-500", "bg-green-500"];
// const colors = ["#FDC200","#FDC200","#FDC200"]

const HeroBanner = () => {
    return (
        <div className="py-2 rounded-md">
            <Swiper
                grabCursor = {false}
                autoplay = {{
                    delay: 4000,
                    disableOnInteraction: false,
            }}
                navigation
                modules = {[Pagination, EffectFade, Navigation, Autoplay]}
                pagination = {{clickable: true}}
                scrollbar = {{draggable: true}}
                slidesPerView = {1}
                >
                {bannerLists.map((item, i) => (
                    <SwiperSlide key={item.id}>
                        <div className={`carousel-item flex flex-col items-center justify-center rounded-md sm:h-[500px] h-96 ${colors[i]}`} key={i}>
                            <div className="flex items-center justify-center">
                            <div className="hidden lg:flex justify-center w-1/2 p-8">
                                <div className="text-center">
                                    <h3 className="text-3xl text-white font-bold">
                                        {item.title}
                                    </h3>
                                    <h1 className="text-5xl text-white font-bold mt-2">
                                        {item.subtitle}
                                    </h1>
                                    <p className="text-white font-bold mt-4">
                                        {item.description}
                                    </p>
                                    <Link
                                        className='mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800'
                                        to="/product"
                                    >
                                        Shop
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full flex justify-center lg:w-1/2 p-4">
                                <img src={item?.image}  alt="new image"/>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroBanner;