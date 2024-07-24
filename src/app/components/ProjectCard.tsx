import React from 'react'
import Link  from "next/link"
import { FaGithub, FaLink  } from "react-icons/fa6";
import ViewLiveLink from './cta-btn/ViewLiveLink';
import ViewGithubRepo from './cta-btn/ViewGithubRepo';

interface ProjectProps {
    bgColor: string,
    hoverBgColor: string,
    title: string,
    overview: string,
    githubLink: string,
    liveLink: string,
    techStack: string[]
}
const ProjectCard:React.FC<ProjectProps> = ({title, overview, githubLink,liveLink,techStack,bgColor,hoverBgColor}) => {
  return (
    <div className={`p-10 ${bgColor} rounded-xl w-full flex flex-row justify-center items-center`}>
        <div className="flex flex-row justify-center items-center gap-36">
            <div className='flex flex-col justify-center items-start gap-5'>
            <div className="flex  justify-center items-start gap-4">
                    <ViewGithubRepo githubLink={githubLink}/>
                    <ViewLiveLink liveLink={liveLink}/>
                </div>
                <div className='space-y-3'>
            <h3 className='font-Sans text-white text-3xl font-medium'>{title}</h3>
            <p className="text-white font-Plus leading-normal">{overview}</p>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-4'>
            {techStack.map((tech, index)=>
            (
                <div key={index} className='border border-white rounded-full text-white px-5 py-2 hover:border-none hover:cursor-pointer hover:bg-white/50'>
                    <span className='font-Poppins text-sm font-bold'>
                    {tech}
                    </span>
                    </div>
            ))}
            </div>
            </div>
        </div>
        <div className=''>

        </div>
    </div>
  )
}

export default ProjectCard