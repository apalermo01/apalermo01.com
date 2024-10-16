import React, { useEffect, useState } from 'react';
import {parseMarkdown, markdownContent} from './MarkdownComponent';

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

  const projectName = projectAttrs.name ? projectAttrs.name : 'Could not load project name';
  const projectUrl = projectAttrs.url ? projectAttrs.url : 'Could not load url';

  return (
    <>
      <p>{projectName}</p>
      <p>{projectUrl}</p>
      <div>
        {content ? <div dangerouslySetInnerHTML={{__html: projectBody}} /> : <p>Loading...</p>}
      </div>
    </>
  )
}

export default ProjectContainer
