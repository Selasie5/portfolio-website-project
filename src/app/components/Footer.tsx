import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:space-y-0 space-y-10 justify-between items-center my-10">
    <div className="flex justify-center items-start gap-3">
      <span className="text-white text-xl">
        <Link href="">
        Github
        </Link>
      </span> {" "} <span className="text-white">|</span> {" "}
      <span className="text-white text-xl">
        <Link href="">
        Linkedin
        </Link>
      </span> {" "} <span className="text-white">|</span> {" "}
      <span className="text-white text-xl">
        <Link href="">
        Twitter
        </Link>
      </span> {" "} <span className="text-white">|</span> {" "}
      <span className="text-white text-xl">
        <Link href="">
        Email
        </Link>
      </span> 
    </div>
<span className="text-gray-400">Designed and developed by Selasie Sepenu</span>
  </footer>
  )
}

export default Footer