
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './slider.module.css';
import { banner } from '../../constant/constant';

interface SliderProps {
  autoplayDelay?: number;
  spaceBetween?: number;
}

interface SlideItem {
  id: number;
  image: string;
  title: string;
}

const slides: SlideItem[] = [
  { id: 1, image: banner, title: "Special Offer Banner" },
  { id: 2, image: banner, title: "Featured Products Banner" },
  { id: 3, image: banner, title: "New Arrivals Banner" },
  { id: 4, image: banner, title: "Seasonal Collection Banner" }
];

const Slider: React.FC<SliderProps> = ({
  autoplayDelay = 2500,
  spaceBetween = 30
}) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      centeredSlides={true}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className={styles.mySwiper}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={styles.swiperSlide}>
          <img 
            src={slide.image} 
            className="w-full aspect-[2.59/1] max-w-[892px]" 
            alt={slide.title}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;