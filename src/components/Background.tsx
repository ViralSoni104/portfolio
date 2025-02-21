import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Background = () => {
  return (
    <div className="col-span-9 col-start-2 relative">
              <div>
                  <Spotlight
                      className="-top-10 -left-10 md:-left-[150] md:-top-[55] h-[40vh]"
                      fill="white"
                  />
                  <Spotlight
                      className="h-[80vh] w-[100vw] md:w-[50vw] -top-10 md:-top-[150] left-full"
                      fill="yellow"
                  />
              </div>
    <div
    className="absolute top-0 left-0 h-screen w-full dark:bg-white-100 bg-black dark:bg-grid-white/[0.15] bg-grid-black-100/[0.1]
    flex items-center justify-center"
    >
        <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white-100
        bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        />
    </div>
    </div>
  )
}

export default Background