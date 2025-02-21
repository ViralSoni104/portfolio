import { stack } from '@/data'
import React from 'react'
import { Feature } from './ui/Feature'

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  relative z-10 py-1 max-w-8xl mx-auto">
        {stack.map((item) => (
            <Feature key={item.title} title={item.title} desc={item.desc} IconComponent={item.Icon} index={item.id} />
        ))}
    </div>
  )
}

export default TechStack