import React, { useEffect, useState } from 'react';
import './homeStyles.css';
import {parseMarkdown, markdownContent} from '../global/MarkdownComponent';

interface elementData {
  name: string
}

const WhatIDoElement: React.FC<elementData> = ({name}) => {

  const [content, setContent] = useState<markdownContent>({'content': '', 'frontMatter': {}});

  useEffect(() => {
    const runParser = async () => {
      const result = await parseMarkdown(name);
      console.log(result);
      setContent(result);
    };

    runParser();
  }, [name])
  return (
    <div className='boxStyle'>
      <div className='textDescription'>
        {content ? <div dangerouslySetInnerHTML={{__html: content.content}} /> : <p>Loading...</p>}
      </div>
    </div>
  )
}

const WhatIDo: React.FC = () => {
  return (
    <WhatIDoElement name={'content/home/home.md'} />
  )
}

export default WhatIDo;
