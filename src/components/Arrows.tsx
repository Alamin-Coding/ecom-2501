import { ArrowLeft, ArrowRight } from "lucide-react";

export function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5 absolute -top-[100px] right-[100px] z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white"

    >
      <ArrowLeft />
    </div>
  );
}

export function NextArrow(props:any) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="bg-secondary rounded-full flex items-center justify-center w-11.5 h-11.5 absolute -top-[100px] right-5 z-50 cursor-pointer transition-all hover:bg-button2 hover:text-white">
      <ArrowRight />
    </div>
  );
}