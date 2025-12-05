
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './slider.module.css';
import { banner } from '../../constant/constant';
import { nanoid } from 'nanoid';

interface SliderProps {
  autoplayDelay?: number;
  spaceBetween?: number;
}

interface SlideItem {
  id: string;
  image: string;
  title: string;
}

const slides: SlideItem[] = [
  { id: nanoid(), image: banner, title: "Special Offer Banner" },
  { id: nanoid(), image: banner, title: "Featured Products Banner" },
  { id: nanoid(), image: banner, title: "New Arrivals Banner" },
  { id: nanoid(), image: banner, title: "Seasonal Collection Banner" }
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
          <div className=' sm:hidden md:block ' >
            <img 
            src={slide.image} 
            className="w-full aspect-[2.59/1] max-w-[892px]" 
            alt={slide.title}
            loading="lazy"
          />
          </div>

          <div className=' md:hidden ' >
            <img 
            src={slide.image} 
            className="w-[700px] aspect-[2.59/1] " 
            alt={slide.title}
            loading="lazy"
          />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;