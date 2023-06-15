import { LoaderScreen } from "./LoaderScreen";
import { Project } from "./Project";
import { projects } from "../assets/projects";
import "../css/utility-classes.css";
import "../css/Projects.css";
export function ProjectList() {
  const projectArr = projects.map((project, index) => {
    return (
      <Project
        title={project.title}
        text={project.text}
        isOdd={index % 2 === 0}
        thumbnail={project.thumbnail}
        link={project.link}
        images={project.images}
        key={`project-${index}`}
      />
    );
  });
  return (
    <>
      <LoaderScreen />
      {projectArr}
    </>
  );
}
