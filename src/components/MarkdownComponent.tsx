import React, { useEffect, useState } from 'react';
import { marked } from "marked";

interface markdownInfo  {
  'fileName': string;
  'sectionName': string;
  'delimiter': string;
}

async function parseMarkdown(file: string, sectionTitle: string, delimiter: string): Promise<string> {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown file: ${file}`);
    }

    const text = await response.text();
    const markdownContent = await marked(text);

    // Use regex to capture content between the heading delimiters
    const regex = new RegExp(`<${delimiter}[^>]*>${sectionTitle}</${delimiter}>([\\s\\S]*?)(<h[1-6]>)`, "i");
    const match = markdownContent.match(regex);

    if (match && match[1]) {
      return match[1].trim();
    } else {
      throw new Error(`Section with title "${sectionTitle}" and delimiter "${delimiter}" not found.`);
    }
  } catch (error) {
    console.error(error);
    return '';
  }
}

const MarkdownContainer: React.FC<markdownInfo> = ({fileName, sectionName, delimiter}: markdownInfo) => {
  
  
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const runParser = async () => {
      const result = await parseMarkdown(fileName, sectionName, delimiter);
      setContent(result);
    };

    runParser();
  }, [fileName, sectionName, delimiter]);


  return (
    <div>
      {content ? <div dangerouslySetInnerHTML={{__html: content }} /> : <p>Loading...</p>}
    </div>
  );
}

export default MarkdownContainer;
