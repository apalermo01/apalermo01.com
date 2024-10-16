import React from 'react';
import './projects.css';
import ProjectContainer from '../components/ProjectContainer';

const projectList = [
  'covid_correlation_analysis',
  'knowledge_base'
];

const Projects: React.FC = () => {

  return (
    <div className='projectPage'>
      {projectList.map((e) => (
        <div className='projectWrapper'>
          <ProjectContainer name={`content/projects/${e}.md`} />
        </div>
      ))}
    </div>
  )
}

export default Projects
