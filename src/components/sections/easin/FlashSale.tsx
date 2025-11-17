import { ArrowLeft, ArrowRight } from "lucide-react"
import HeadingHomePage from "../../HeadingHomePage"
import { useGetProductsQuery } from "../../../api/productApi"
import ProductCard from "../../ProductCard"
import { Spinner } from "../../ui/spinner"
import Button2 from "../../Button2"
import { useEffect, useState } from "react"
import Loading from "../../Loading"
import Slider from "react-slick";


const FlashSale: React.FC = () => {
  const { data, isLoading } = useGetProductsQuery('')

  if (isLoading) {
    return <p>loading...</p>
  }


  const flashSale = (data?.products ?? []).slice().sort((a, b) => {
    return b.discountPercentage - a.discountPercentage
  }).slice(0, 8)



  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };


  return (
    <section className="mb-15">
      <div className="contaimer">
        {/* Heading */}
        <div className="flex items-center justify-between">

          <div className="flex items-center justify-start gap-20">

            <HeadingHomePage subHeading="Today's" heading="Flash Sales" headingAlign="left" />
            <Countdown targetDate="2025-11-12T23:59:59" />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-2">

          </div>
        </div>

        {/* Grid Layout */}
        <div>

          {isLoading && <Loading />}

        </div>

        {/* Grid Layout*/}
        <div className="">
          <Slider {...settings}>
            {
              flashSale.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                )
              })
            }
          </Slider>
        </div>

        <div className="flex items-center mt-15 justify-center">

          <Button2 >View All Products</Button2>
        </div>

      </div>
    </section>
  )
}
export default FlashSale



const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  const calculateTimeLeft = (): TimeLeft => {
    const difference = (+new Date(targetDate)) - (+new Date());
    // console.log(difference);

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };



    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className=" flex max-w-[320px] justify-center">
      <div className="flex flex-wrap justify-center items-start gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="  flex flex-col justify-center items-center "
          >
            <span className="text-xs font-poppins text-gray-700 font-medium">{unit.label}</span>
            <p className=" font-bold font-inter text-[32px] text-black">
              {unit.value.toString().padStart(2, "0")}  {index < 3 ? <span className="text-button2">:</span> : ""}

            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5 absolute -top-[100px] right-[100px] z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white"

    >
      <ArrowLeft />
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5 absolute -top-[100px] right-5 z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white">
      <ArrowRight />
    </div>
  );
}

