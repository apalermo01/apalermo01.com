import React, { useEffect, useState } from 'react';
import { marked } from "marked";
import fm, { FrontMatterResult } from 'front-matter';

export interface markdownContent {
  content: string;
  frontMatter: Record<string, any>;
}

export async function parseMarkdown(file: string): Promise<markdownContent> {

  const content: markdownContent = {
    content: '',
    frontMatter: {}
  };

  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown file: ${file}`);
    }

    const text = await response.text();
    const parsed: FrontMatterResult<any> = fm(text);
    content.frontMatter = parsed.attributes;
    content.content = await marked(parsed.body);

    
    return content
  } catch (error) {
    console.error(error);
    return content;
  }
}

interface markdownInfo  {
  fileName: string;
}
const MarkdownContainer: React.FC<markdownInfo> = ({fileName}: markdownInfo) => {
  
  
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const runParser = async () => {
      const result = await parseMarkdown(fileName,);
      setContent(result.content);
    };

    runParser();
  }, [fileName]);


  return (
    <div>
      {content ? <div dangerouslySetInnerHTML={{__html: content }} /> : <p>Loading...</p>}
    </div>
  );
}

export default MarkdownContainer;
