"use client"
import React,{useState, useEffect} from 'react'
import moment from "moment";

const Header = () => {
    const [visitDate, setVisitDate] = useState("");
    const [visitTime, setVisitTime] = useState("");
    useEffect(() => {
        const visitTimestamp = localStorage.getItem("visitTimestamp");
        if (visitTimestamp) {
          const lastVisit = moment(visitTimestamp);
          setVisitDate(lastVisit.format("MMMM Do YYYY"));
          setVisitTime(lastVisit.format("h:mm:ss a"));
        } else {
          const now = moment();
          localStorage.setItem("visitTimestamp", now.format());
          setVisitDate(now.format("MMMM Do YYYY"));
          setVisitTime(now.format("h:mm:ss a"));
        }
      }, []);
  return (
    <header className="flex justify-between item-center">
    <p className="text-white text-xl py-10 italic">Dr_Seps</p>
    <p className="text-white text-xl py-10 italic">{visitDate} | {visitTime}</p>
    </header>
  )
}

export default Header