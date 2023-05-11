import { ProjectPreview } from "./ProjectPreview";
import "../css/utility-classes.css";
import "../css/Projects.css";
export function ProjectList() {
  return (
    <>
      <div className="project-container text">
        <div className="project-text-container">
          <h4 className="project-title">StoryBook</h4>
          <div className="project-text">
            An AI powered childrens book application. You give it a few prompts
            and it gives you a childrens book based on your inputs. True to the
            genre sometimes the pictures turn out a bit surreal. Written with
            React, Redux Toolkit, and Express.
          </div>
        </div>
        <ProjectPreview isOdd={true} thumbnail={'src/media/TESTIMAGE.png'} link={'https://github.com/nhcathcart/nhcathcart'}/>
      </div>
      <div className="project-container text">
        <ProjectPreview isOdd={false} thumbnail={'src/media/SplacheThumbnail.png'} link={'https://github.com/oslabs-beta/Splache'}/>
        <div className="project-text-container">
          <h4 className="project-title">Splache</h4>
          <div className="project-text">
            A server side GraphQL cacheing solution built with node and REDIS. Check it out on Github and NPM.
          </div>
        </div>
      </div>
      <div className="project-container text">
        <div className="project-text-container">
          <h4 className="project-title">StoryBook</h4>
          <div className="project-text">
            An AI powered childrens book application. You give it a few prompts
            and it gives you a childrens book based on your inputs. True to the
            genre sometimes the pictures turn out a bit surreal. Written with
            React, Redux Toolkit, and Express.
          </div>
        </div>
        <ProjectPreview isOdd={true} thumbnail={'src/media/TESTIMAGE.png'}/>
      </div>
    </>
  );
}
