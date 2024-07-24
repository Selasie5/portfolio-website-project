"use client"
// components/Loader.js
import { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 90); // Adjust this value for speed of loader

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="  fixed inset-0 flex flex-col items-end justify-end px-20 py-10 bg-blue-950   z-50">
      <span className=' text-white text-5xl'>
      {progress} %
      </span>
      <p className="mt-4 text-white text-sm font-extralight italic">
        {progress <= 10 && "Starting engines 🚀..."}
        {progress > 10 && progress <= 25 && "Warming up... 🔥"}
        {progress > 25 && progress <= 50 && "Mounting all components 👨🏻‍💻..."}
        {progress > 50 && progress <= 75 && "Setting up the magic ✨..."}
        {progress > 75 && progress <= 99 && "Almost set 😁..."}
        {progress === 100 && "Site is ready to view 🎉..."}
      </p>
      
    </div>
  );
}
