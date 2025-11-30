import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const ProjectsMain = () => {
  return (
    <div className='w-[75vw] h-[50vh] mx-auto flex flex-col items-center justify-center gap-5 '>
      <ProjectText />
      <SingleProject />
    </div>
  )
}

export default ProjectsMain