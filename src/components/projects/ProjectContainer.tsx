import React, { useEffect, useState } from 'react';
import {parseMarkdown, markdownContent} from '../global/MarkdownComponent';

interface projectData {
  name: string;
}

const ProjectContainer: React.FC<projectData> = ({name}) => {

  const [content, setContent] = useState<markdownContent>({'content': '', 'frontMatter': {}});
  useEffect(() => {
    const runParser = async () => {
      const result = await parseMarkdown(name);
      setContent(result);
    };

    runParser();
  }, [name]);

  const projectBody: string = content.content;
  const projectAttrs: Record<string, any> = content.frontMatter;

  const projectName = projectAttrs.Name ? projectAttrs.Name : 'Could not load project name';
  const projectUrl = projectAttrs.Link ? projectAttrs.Link : 'Could not load url';
  const projectImage = projectAttrs.Image ? projectAttrs.Image : 'Could not find image url';

  return (
    <div className='boxStyle'>
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <h2 className='projectName'>{projectName}</h2>
      <img src = {projectImage} className='projectImage' alt="Some visual related to the project"/>
      <div className='projectDescription'>
        {content ? <div dangerouslySetInnerHTML={{__html: projectBody}} /> : <p>Loading...</p>}
      </div>
    </a>
    </div>
  )
}

export default ProjectContainer
