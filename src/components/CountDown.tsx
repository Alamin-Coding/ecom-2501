import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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
    <section className=" flex max-w-[280px] lg:max-w-[320px] justify-center">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="w-12 lg:w-15.5 h-12 lg:h-15.5  rounded-full bg-white flex flex-col justify-center items-center "
          >
            <p className=" font-bold text-black">
              {unit.value.toString().padStart(2, "0")}
            </p>
            <span className="text-[11px] text-gray-700 font-medium">{unit.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
