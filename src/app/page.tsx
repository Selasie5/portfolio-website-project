"use client"
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import TechStackCard from "./components/Skills";
import Loader from "./components/Loader";
import {Links} from "../utils/Links"
import { ProjectGithub } from "../utils/Links";
import {motion} from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiJest,
  SiFigma
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const itemVariantss = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {

  
 
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    // Simulate a loading delay
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 11000); // Adjust the duration as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <motion.main 
    initial="hidden"
    animate="visible"
    variants={containerVariants}>
    

      <motion.section
       className=" h-auto flex flex-col justify-center items-start mt-6 mb-24  "
       variants={containerVariants}
       >
        {/* Hero Section(Main) */}
        <motion.div
        variants={itemVariantss}
         className="flex items-center justify-center px-3 py-2 gap-x-2 bg-white/10 rounded-full group my-6 hover:cursor-pointer">
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
        <span className="text-white font-Sans text-sm group-hover:hidden"> Currently based in Accra, Ghana 🌍</span>
        <span className="text-white font-Sans text-sm hidden group-hover:block"> But available to work remotely 🌍</span>
        </motion.div>
        <div className="flex justify-center items-center gap-x-5">
          <hr className="bg-white w-16 h-[0.1rem]"/>
          <h1 className=" text-6xl text-white font-medium leading-normal">
            Hi there, <br/>
          </h1>
        </div>
      <motion.div
      variants={itemVariantss}
       className="flex ">
      <h2 className=" text-6xl font-medium text-white leading-normal">I am   {" "}{" "}<span className="scale-3">👨🏻‍🦱</span>
          <br/>
          Selasie Sepenu {" "}.
          <span className="text-green-300"> Software Engineer</span>
        </h2> 
      </motion.div>
       

        {/* About Me  */}
         <motion.div 
         variants={itemVariantss}
         className="pt-10 md:w-2/3">
         <p className="text-white text-lg font-[100] leading-normal">I am currently a software engineering fellow at {" "}
          <span className="font-normal text-green-300">
          <Link href={Links[0]}>
          Headstarter AI
          </Link>
            </span> leveraging some of the most amazing AI technologies, app development frameworks and APIs to build innovative
            software solution. I bring strong problem solving , collaboration and technical skills to any team I join or projects I work on.
          </p>
         </motion.div>
         <div className="py-10 w-2/3">
         <p className=" text-white text-lg font-[100] leading-normal">Check out my{" "}
          <span className="font-normal text-green-300">
          <Link href={Links[5]}>
          Resume  
          </Link>
            </span>{" "} / {" "}
          <span className="font-normal text-green-300">
          <Link href={Links[1 ]}>
          Github  
          </Link>
            </span>{" "}
           to learn more about my skills 
                 </p>
         </div>
      </motion.section>
      <motion.section 
      variants={containerVariants}
      className="flex flex-col justify-center items-start space-y-24 my-24">
        <motion.div 
        variants={itemVariantss}
        className="flex justify-center items-center gap-x-4">
        <hr className="bg-white w-16 h-[0.1rem]"/>
        <h2 className="text-5xl  text-white font-normal">Projects I&apos;ve worked on</h2>
        </motion.div>
        <div className="grid  md:grid-cols-2 place-items-center gap-10 mt-5">
        <ProjectCard title="Mailchimp Connect API"  overview ="This API was built to connect the waitlist form on a website to mailchimp, so transactional or marketing email sending can be easily done." githubLink={ProjectGithub[3]} liveLink="" techStack={["NodeJS", "Express JS","Typescript","Heroku","Mailchimp API"]} bgColor="bg-purple-500/30" hoverBgColor="hover:bg-purple-500/50"/>
          <ProjectCard title="Notify"  overview ="This is a fullstack web-application with authentication and CRUD feature that enables people to take notes , pin them and effectively filter them based on category" githubLink={ProjectGithub[1]} liveLink="" techStack={["React JS", "Tailwind CSS","Node JS","Express JS","MongoDB","Render"]} bgColor="bg-green-500/30" hoverBgColor="hover:bg-green-500/50"/>
        <ProjectCard title="Booking.com/Clone"  overview ="This API was built to connect the waitlist form on a website to mailchimp, so transactional or marketing email sending can be easily done." githubLink={ProjectGithub[0]} liveLink="" techStack={["Next JS","Tailwind CSS", "Typescript","Shadcn UI","Oxylabs"]} bgColor="bg-blue-500/30" hoverBgColor="hover:bg-blue-500/50"/>
          <ProjectCard title="ElastiSearch"  overview="This is a fullstack web application that leverages the high-performace searching ability of PostgreSQL to model a search engine for a database seeded with jacket data " githubLink={ProjectGithub[2]} liveLink="" techStack={["Next JS","Tailwind CSS", "Typescript","Neon","PostgreSQL","Drizzle ORM","Render"]} bgColor="bg-emerald-500/30" hoverBgColor="hover:bg-emerald-500/50"/>
        </div>
      </motion.section>
      <section className="flex flex-col md:flex-row  justify-center items-center space-x-10">
        <div className="w-full md:w-1/2 flex flex-col justfy-center items-start space-y-5">
        <div className="flex justify-center items-center gap-x-4">
        <hr className="bg-white w-16 h-[0.1rem]"/>
        <h2 className=" text-5xl   text-white font-normal">Skills and Languages</h2>
        </div>
        <p className=" text-white text-lg font-light">Experienced in crafting detailed UIs with React and Next JS. My projects span fintech, social networking, and service industries, focusing on scalable and user-optimized solutions.</p>
        <div className="py-10 w-2/3">
         <p className=" text-white text-lg font-[100] leading-normal">Check out my{" "}
          <span className="font-normal text-green-300">
          <Link href="">
          Resume  
          </Link>
            </span>{" "} / {" "}
          <span className="font-normal text-green-300">
          <Link href="">
          Github  
          </Link>
            </span>{" "}
           to learn more about my skills 
                 </p>
         </div>
        </div>
        <div className=" w-full md:w-1/2">
        <div className="flex flex-wrap  md:w-[98%] items-start justify-start gap-y-7 md:gap-y-10  gap-x-2 md:gap-x-8 mt-4">
        <TechStackCard icon={FaHtml5} language="HTML 5" domain="frontend"/>
      <TechStackCard icon={FaCss3Alt} language="CSS 3" domain="frontend"/>
      <TechStackCard icon={FaJsSquare} language="Javascript" domain=""/>
      <TechStackCard icon={FaReact} language="React" domain="frontend"/>
      <TechStackCard icon={SiTypescript} language="Typescript" domain=""/>
      <TechStackCard icon={ SiNextdotjs} language="Next JS" domain=""/>
      <TechStackCard icon={  SiTailwindcss} language="Tailwind CSS" domain=""/>
      <TechStackCard icon={ SiNodedotjs } language="Node JS" domain="backend"/>
      <TechStackCard icon={SiExpress} language="Express JS" domain="backend"/>
      <TechStackCard icon={ SiMongodb } language="Mongo DB" domain="database"/>
      <TechStackCard icon={  SiPostgresql  } language="PostgreSQL" domain="database"/>
      <TechStackCard icon={ SiPrisma  } language="Prisma" domain="database"/>
      <TechStackCard icon={ SiFirebase } language="Firebase" domain="backend"/>
      <TechStackCard icon={  SiJest } language="Jest" domain="testing"/>
      <TechStackCard icon={  SiFigma } language="Figma" domain="frontend"/>
      <TechStackCard icon={  SiFigma } language="Git" domain="frontend"/>
      <TechStackCard icon={  SiFigma } language="Agile" domain="frontend"/>
      <TechStackCard icon={  SiFigma } language="CI/CD" domain="frontend"/>
        </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center md:items-center py-36 ">
<div className="flex justify-center items-center gap-6">
  <hr className="w-10 h-[0.1rem]"/>
<h2 className="text-[4rem] text-white text-center">Interested in working together ?</h2>
<hr className="w-10 h-[0.1rem]"/>
</div>
<div className="flex justify-center items-center gap-4 my-2">
<button className="border border-white  text-white rounded-sm text-sm font-bold px-8 py-[0.9em] hover:border-none hover:bg-green-300 hover:text-white ">
  <Link href="">
  Send A Message
  </Link>
</button>{" "}
<span className="text-white text-4xl"> / </span>
<button className="border border-white  text-white rounded-sm text-sm font-bold px-8 py-[0.9rem] hover:border-none hover:bg-green-300 hover:text-white">
  <Link href="https://calendly.com/selasisepenu5/let-s-connect">
  Schedule A Meeting
  </Link>
</button>
</div>
      </section>
    </motion.main>
  );
}
