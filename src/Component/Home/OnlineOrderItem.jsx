// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import slider images
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const OnlineOrderItem = () => {
    return (
        <div className='px-10 py-20'> 
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                    
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>
                        {/* <h1>sdfkjhjkfdsh</h1> */}
                        <img src={img5} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OnlineOrderItem;