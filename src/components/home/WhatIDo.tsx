import React, { useEffect, useState } from 'react';
import './homeStyles.css';
import { parseMarkdown, markdownContent } from '../global/MarkdownComponent';
import * as cheerio from "cheerio";

interface whatIDoData {
  header: string,
  content: string
}

const WhatIDo: React.FC = () => {

  const [content, setContent] = useState<markdownContent>({ 'content': '', 'frontMatter': {} });
  const [sections, setSections] = useState<whatIDoData[]>([]);

  useEffect(() => {
    const runParser = async () => {
      const result = await parseMarkdown('content/home/home.md');
      setContent(result);
    };

    runParser();

    const $: cheerio.CheerioAPI = cheerio.load(content.content);
    const $h1 = $('h1');
    const headerSections: whatIDoData[] = [];

    $h1.each((_, header) => {
      headerSections.push({
        'header': $(header).text(),
        'content': $(header).next('p').text()
      });
    })

    setSections(headerSections);
  }, [content.content])
  return (
    <div className='whatIDo-grid'>
      {sections.map((e) => (
        <div className='boxStyle'>
          <h1>{e.header}</h1>
          <p>{e.content}</p>
        </div>
      ))}
    </div>
  )
}

export default WhatIDo;
