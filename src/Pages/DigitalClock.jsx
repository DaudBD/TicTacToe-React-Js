import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-10 rounded-2xl text-center shadow-2xl">
        <h1 className="text-4xl font-bold text-amber-400">Digital Clock</h1>

        <div className="text-6xl font-bold text-white mt-6">
          {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
        </div>

        <div className="text-xl text-white mt-4">
          {time.toLocaleDateString("en-BD", {
            timeZone: "Asia/Dhaka",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
