import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Skill() {
    const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 80 },
    { name: 'React', icon: <FaReact className="text-blue-400" />, level: 75 },
  ];
  return (
    <div>
 
     <section className="py-20 px-4 md:px-8 bg-[#f7f7f7] dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-4xl">{skill.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div> 
  )
}

export default Skill
