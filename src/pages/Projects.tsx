import React from 'react';
import './projects.css';
import ProjectContainer from '../components/ProjectContainer';

const projectList = [
  'knowledge_base',
  'dotfiles',
  'covid_correlation_analysis',
  'formula_1_statistics',
  'hyperparameter_tuning',
  'web_scraping_metal_bands'
];

const Projects: React.FC = () => {

  return (
  <>
    <div className="siteTitle">Projects</div>
    <div className="projectDescription">
       Here are some things that I've built in the past and that I'm building right now. 
    </div>
      <div className='projectPage'>
        {projectList.map((e) => (
        <div className='projectWrapper'>
          <ProjectContainer name={`content/projects/${e}.md`} />
        </div>
      ))}
    </div>
  </>
  )
}

export default Projects
