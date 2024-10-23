import React from 'react'
import { SectionWrapper } from "../../hoc";
import {BallCanvas} from "../../components/components/canvas"
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <div className='flex justify-center flex-row gap-10 flex-wrap'>
       {
        technologies.map((technology,index)=>(
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
            
          </div>
        ))
       }
    </div>
  )
}

export default SectionWrapper(Tech,"tech")