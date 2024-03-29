import { ProjectPreview } from "./ProjectPreview";
import "../css/utility-classes.css";
import "../css/Projects.css";
export function Project(props: {
  title: string;
  text: string;
  isOdd: boolean;
  thumbnail: string;
  link: string;
  images: string[];
}) {
  const { title, text, isOdd, thumbnail, link, images } = props;
  if (isOdd) {
    return (
      <>
        <div className="project-container text">
          <div className="project-text-container">
            <div className="project-text-inner">
              <h4 className="project-title">{title}</h4>
              <div className="project-text">{text}</div>
            </div>
          </div>
          <ProjectPreview
            isMobile={false}
            isOdd={true}
            thumbnail={thumbnail}
            link={link}
            images={images}
          />
        </div>
        <div className="project-container-mobile text">
          <div className="project-text-container-mobile">
            <div className="project-text-inner-mobile">
              <h4 className="project-title">{title}</h4>
              <div className="project-text">{text}</div>
            </div>
          </div>
          <ProjectPreview
            isMobile={true}
            isOdd={true}
            thumbnail={thumbnail}
            link={link}
            images={images}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="project-container text">
        <ProjectPreview
          isMobile={false}
          isOdd={false}
          thumbnail={thumbnail}
          link={link}
          images={images}
        />
        <div className="project-text-container">
          <div className="project-text-inner">
            <h4 className="project-title">{title}</h4>
            <div className="project-text">{text}</div>
          </div>
        </div>
      </div>
      <div className="project-container-mobile text">
        <div className="project-text-container-mobile">
          <div className="project-text-inner-mobile">
            <h4 className="project-title">{title}</h4>
            <div className="project-text">{text}</div>
          </div>
        </div>
        <ProjectPreview
          isMobile={true}
          isOdd={true}
          thumbnail={thumbnail}
          link={link}
          images={images}
        />
      </div>
    </>
  );
}
