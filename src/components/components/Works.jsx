import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../../styles";
import { projectsData } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { view } from "../../assets";
import { SectionWrapper } from "../../hoc";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full sm:w-[360px] bg-tertiary p-5 rounded-2xl"
      >
        <div className="w-full h-[230px] relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={view}
                alt="view"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] text-white font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {Array.isArray(tags) && tags.length > 0 ? (
            tags.map((tag, index) => (
              <p key={index} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          ) : (
            <p className="text-red-500">No tags available</p>
          )}
        </div>
      </Tilt>
    </>
  );
};
const Works = () => {

  return (
    <>
      <div
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={`${styles.sectionHeadText} mt-4`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples. Each project is briefly described with links to
          code repositories and live demos. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
      {projectsData.projects && projectsData.projects.length > 0 ? (
       projectsData?.projects?.map((project, index) => (
    <ProjectCard key={`project-${index}`} index={index} {...project} />
  ))
) : (
  <p className="text-red-500">No projects available</p>
)}

      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
