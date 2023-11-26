import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { experiences, skills } from "./../Constants/index";
import { useEffect } from "react";

const About = ({mode, setIsHome}) => {
  useEffect(()=>{
    setIsHome(false);
  },[])
  return (
    <section className='max-container'>
      <h1 className={mode ? 'head-text text-yellow-50':'head-text text-black'}>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Subhadeep
        </span>{" "}
        👋
      </h1>

      <div className={`mt-5 flex flex-col gap-3 ${mode ? "text-slate-400":"text-slate-600"}`}>
        <p>
        A passionate MCA student with a passion for technology and innovation. I am dedicated to delivering high-quality software solutions that meet the needs of my clients.
        </p>
        <p>
        I am a self-taught developer with a passion for creating elegant and user-friendly web applications. I am always looking for new challenges and opportunities to improve my skills and make a positive impact on the world.
        </p>
        <p>
        I am a hardworking individual who is always eager to learn and grow as a developer. I am a dedicated team player who is always ready to take on new challenges.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className={`subhead-text ${mode ? "text-yellow-50":"text-black"}`}>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex flex-col justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
                <span className={`mt-3 ${mode ? "text-slate-300":"text-slate-500"}`}>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* experiences */}
      <h3 className={`subhead-text mt-16 mb ${mode ? "text-yellow-50":"text-black"}`}>My Coding Experiences</h3>
      <div className='flex flex-wrap my-16 gap-16'>
        {experiences.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className={`text-2xl font-poppins font-semibold ${mode ? "text-yellow-50":"text-black"}`}>
                {project.name}
              </h4>
              <p className={`mt-2 ${mode ? "text-slate-400":"text-slate-600"}`}>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  {/* if project.name is Geek for geeks or Leetcode then Link otherwise Certificate */}
                  {project.name === "Geek For Geeks" || project.name === "Leetcode"
                    ? project.name+" Link"
                    : "Certificate"}
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;