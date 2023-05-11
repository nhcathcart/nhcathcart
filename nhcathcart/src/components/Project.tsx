import { Fragment } from "react";
import "../css/utility-classes.css";
import "../css/Projects.css";
export function ProjectDesc(props: {title: string, text: string, isOdd: boolean}) {
  const { title, text, isOdd } = props;
  if (isOdd){
    return (
        <Fragment>
          <div className="project-text-container">
              <h4 className="project-title">{title}</h4>
              <div className="project-text">
                { text }
              </div>
            </div>
        </Fragment>
      );
  }
  return (
    <Fragment>
          <div className="project-text-container">
              <h4 className="project-title">{title}</h4>
              <div className="project-text">
                { text }
              </div>
            </div>
        </Fragment>
  )
  
}