import React from 'react'
import { TypewriterReg } from './ui/Typewriter'
import { name, positions } from '@/data'
import Contact from './Contact'


const Introduction = () => {
  return (
    <div className="mt-[12vh] md:mt-5 flex flex-col gap-2 md:flex-row md:justify-between items-center">
        <div className="relative flex flex-col md:items-start items-center gap-1 md:gap-0">
            <h1 className="text-3xl text-gray-100 font-extrabold -ml-1">{name}</h1>
            <span className="tracking-widest text-xs font-light mb-1">
            <TypewriterReg text={positions}/>
            </span>
        </div>
        <div className="flex items-center md:gap-3 gap-6">
            <Contact/>
        </div>
    </div>
  )
}

export default Introduction