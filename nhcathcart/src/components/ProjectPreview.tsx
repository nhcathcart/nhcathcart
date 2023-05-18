import { useState, Fragment } from "react";
import { Modal } from "./Modal";
import { Carousel } from "./Carousel";
import "../css/utility-classes.css";
import "../css/Projects.css";
export function ProjectPreview(props: { isOdd: boolean; thumbnail: string; link: string; images: string[]}) {
  const [showModal, setShowModal] = useState(false);
  const { isOdd, thumbnail, link, images } = props;
  return (
    <Fragment>
      <div
        className={
          isOdd
            ? "project-preview-container-right"
            : "project-preview-container-left"
        }
      >
        <div className="project-preview accent-test">
          <img className="thumbnail" src={thumbnail} />
          <div className="preview-buttons">
            <button className="preview-button" onClick={() => setShowModal(true)}>Preview</button>
            <button className="preview-button" onClick={()=>window.open(`${link}`, '_blank')}>See the code</button>
          </div>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="modal-preview">
          <Carousel images={images}/>
        </div>
      </Modal>
    </Fragment>
  );
}
