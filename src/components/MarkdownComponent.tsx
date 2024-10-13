import React, { useEffect, useState } from 'react';
import { marked } from "marked";


async function parseMarkdown(file: string): Promise<string> {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown file: ${file}`);
    }

    const text = await response.text();
    const markdownContent = await marked(text);
    
    return markdownContent;
    // Use regex to capture content between the heading delimiters
    //const regex = new RegExp(`<${delimiter}[^>]*>${sectionTitle}</${delimiter}>([\\s\\S]*?)(<h[1-6]>)`, "i");
    //const match = markdownContent.match(regex);

    //if (match && match[1]) {
      //return match[1].trim();
    //} else {
      //throw new Error(`Section with title "${sectionTitle}" and delimiter "${delimiter}" not found.`);
    //}
  } catch (error) {
    console.error(error);
    return '';
  }
}

interface markdownContent  {
  fileName: string;
}
const MarkdownContainer: React.FC<markdownContent> = ({fileName}: markdownContent) => {
  
  
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const runParser = async () => {
      const result = await parseMarkdown(fileName,);
      setContent(result);
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
