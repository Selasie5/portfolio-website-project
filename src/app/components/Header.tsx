"use client";
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Header = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update date and time
    const updateDateTime = () => {
      const now = moment();
      setCurrentDate(now.format("MMMM Do YYYY"));
      setCurrentTime(now.format("h:mm:ss a"));
    };

    // Update immediately after mount
    updateDateTime();

    // Set an interval to update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Avoid rendering until date and time are set
  if (!currentDate || !currentTime) {
    return null;
  }

  return (
    <header className="flex justify-between items-center">
      <p className="text-white text-xl py-10 italic">Dr_Seps</p>
      <p className="font-Poppins text-white text-md py-10">{currentDate} | {currentTime} GMT</p>
    </header>
  );
};

export default Header;
