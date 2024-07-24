import React from 'react'
import { IconBaseProps } from 'react-icons'

interface TechStackProps {
    language: string,
    icon: React.ComponentType<IconBaseProps>,
    domain: string
  }

const TechStackCard:React.FC<TechStackProps> = ({language, icon:Icon, domain}) => {
  return (
    <div className="font-Poppins flex items-center justify-center gap-x-2 px-6 py-2 text-white text-lg font-medium  group hover:text-white border-white bg-green-300 border-l-4 border-l-green-950 hover:cursor-pointer">
        <Icon size= {20} className="hidden group-hover:block transition"/>
        <span className='font-Poppins text-sm font-extrabold uppercase'>{language}</span>
    </div>
  )
}

export default TechStackCard