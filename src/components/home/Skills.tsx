import React from 'react';
import { FaPython,
         FaDatabase,
         FaGitAlt,
         FaGithub,
         FaJenkins,
         FaDocker,
         FaReact
} 
from "react-icons/fa";

import { IoLogoJavascript } from 'react-icons/io5';

import { RiFlowChart } from 'react-icons/ri';

import { TbBrandGoogleBigQuery } from 'react-icons/tb';

import { BiLogoPostgresql } from "react-icons/bi";

import { SiRetool,
         SiPowerbi,
         SiTypescript,
         SiGoogleappsscript,
         SiDbt,
         SiGithubactions,
         SiGooglecloud,
         SiAmazonec2
} from "react-icons/si";

import { LiaLinode } from "react-icons/lia";


const SkillsContainer: React.FC = () => {

  return (
  <div className = 'skillsContainer'>
    <div className = 'coreSkills boxStyle'>
      <h1 className = 'skillsTitle'>Core Skills</h1>
        <p>Languages: <FaPython/> Python, <FaDatabase/> SQL, <IoLogoJavascript/> Javascript</p>
        <p>Data Engineering: <RiFlowChart /> ETL Pipelines, <BiLogoPostgresql/> Postgres, <TbBrandGoogleBigQuery/> Bigquery</p>
        <p>DevOps: <FaGitAlt /> Git, <FaGithub /> Github</p>
        <p>Frontend: <SiRetool/> Retool, <SiPowerbi /> Power BI</p>
    </div>
    <div className = 'additionalSkills boxStyle'>
      <h1 className = 'skillsTitle'>Additional Skills</h1>
        <p>Languages: <SiTypescript/> Typescript,  <img src={require("../../assets/bxl-c-2.svg").default} alt="C Logo" className='icon'/></p>
        <p>Data Engineering: <SiGoogleappsscript/> Google App Script, <SiDbt/> DBT</p>
        <p>DevOps: <SiGithubactions/> Github Actions, <FaJenkins/> Jenkins, <FaDocker/> Docker</p>
        <p>Cloud: <SiGooglecloud /> Google Cloud, <SiAmazonec2 /> AWS, <LiaLinode /> Linode</p>
        <p>Frontend: <FaReact /> React</p>
    </div>
  </div>
  )
}

export default SkillsContainer
