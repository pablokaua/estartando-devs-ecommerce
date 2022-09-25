import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './styles.css'
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';


export const Carousel = () => {
    const settings = {
        spaceBetween: 40,
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        autoplay: {
            delay: 4000,
        }
    }

    const { productsBanner } = useContext(ProductContext);

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]} 
            {...settings}>
            {productsBanner?.map(banner => (
                <SwiperSlide key={banner?.id}><div><img src={banner?.image} alt={banner?.name} /></div></SwiperSlide>
            ))}
        </Swiper>
    )
}