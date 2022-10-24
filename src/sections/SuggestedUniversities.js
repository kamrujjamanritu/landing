import React from 'react';
import Image from 'next/image';
import { RiMapPin2Line } from "react-icons/ri";
import suggestedUniversityData from '../../pages/api/universityData.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SuggestedUniversities = ({handleModal}) => {


    return (
        <section className="suggested section-space-top">
            <div className="container">
                <div className="universities">
                    <div className="universities__head">
                        <div className="universities__items">
                            <div className="universities__item-wrapper">
                                <Swiper
                                    spaceBetween={12}
                                    slidesPerView={"auto"}
                                    slidesPerGroup={1}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    navigation={false}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    autoplay={{
                                        delay: 8000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints = {{
                                        1200: {
                                            spaceBetween: 24,
                                          },
                                    }}
                                >
                                    {
                                        suggestedUniversityData.map((suggestedItem, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="universities__item">
                                                        <div className="universities__item__thumb">
                                                                <a onClick={handleModal}>
                                                                    <Image src={suggestedItem.image} layout="fill" alt='image' />
                                                                </a>
                                                        </div>
                                                        <div className="universities__item__content-wrapper">
                                                            <div className="universities__item__content">
                                                                <h3>
                                                                        <a onClick={handleModal}>{suggestedItem.name}</a>
                                                                </h3>
                                                                <p className="primary-text">{suggestedItem.category}</p>
                                                            </div>
                                                            <div className="universities__item__info">
                                                                <div className="location">
                                                                    <RiMapPin2Line />
                                                                    <p className="primary-text">{suggestedItem.location}</p>
                                                                </div>
                                                                <div className={suggestedItem.tag ? "private" : "tag"}>
                                                                    <p className="secondary-text">{suggestedItem.type}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SuggestedUniversities;
