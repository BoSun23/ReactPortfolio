/**
 * @copyright 2025 Bo Sun
 * @license Apache-2.0
 */

/**
 * 
 * Components
 */

import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My Tech Stack & Skills</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
        I specialize in building scalable, high-performance digital solutions with a strong foundation in both frontend and backend technologies. From crafting seamless user experiences to optimizing database performance, here are the tools and technologies I work with:
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItem.map(({ imgSrc, label, desc}, key) =>(
                    <SkillCard
                    key={key} 
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc} 
                    classes="reveal-up"                  
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Skill;
