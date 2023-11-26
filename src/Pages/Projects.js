import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { projects } from "./../Constants/index";
import youtube from "./../assets/icons/youtube.png";
import github from "./../assets/icons/github.svg";

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = ({mode, setIsHome}) => {
  useEffect(()=>{
    setIsHome(false);
  },[])
  return (
    <section className="max-container">
      <div className="pb-16">
        <h3 className={`subhead-text ${mode ? 'text-yellow-50':'text-black'}`}>My Projects</h3>
        <div className={`mt-5 flex flex-col gap-3 ${(mode) ? 'text-slate-400':'text-slate-600'}`}>
          <p>
            I've participated in many internal and external hackathons, coding
            competitions for leveling up my skills and teaming up with smart
            people. Here's some of my projects:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline style={{borderColor:'black'}}>
            {projects.map((experience, index) => (
              <VerticalTimelineElement
                className={`${mode ? 'text-white/60':'text-black'}`}
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <div className="flex justify-between">
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                    <div className="flex items-center gap-1">
                      <Link to={experience.github} target="_blank" rel='noopener noreferrer'>
                      <img
                        src={github}
                        alt="github"
                        className="w-6 object-contain cursor-pointer"
                      />
                      </Link>
                      {experience.github_2 && (
                        <Link to={experience.github_2} target="_blank" rel='noopener noreferrer'>
                        <img
                          src={github}
                          alt="github"
                          className="w-6 object-contain cursor-pointer"
                        />
                        </Link>
                      )}
                      {experience.youtube && (
                      <Link to={experience.youtube} target="_blank" rel='noopener noreferrer'>
                      <img
                        src={youtube}
                        alt="youtube"
                        className="w-9 object-contain cursor-pointer"
                      />
                      </Link>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/90 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="text-black-500 font-medium text-base">
                  Technologies Used
                </span>
                <div className="my-5 flex flex-wrap items-center">
                  {experience.technologies.map((tech) => (
                    <span
                      className="text-sm text-black-500/90 py-1 px-3 rounded-lg mx-3 my-1 font-base"
                      style={{ background: experience.iconBg }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
