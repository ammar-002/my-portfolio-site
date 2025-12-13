import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const ProjectsMain = () => {
  return (
    <div id='projects' className='w-[75vw]  mt-30 mx-auto flex flex-col items-center justify-center gap-5 '>
      <ProjectText />
      <SingleProject />
    </div>
  )
}

export default ProjectsMain