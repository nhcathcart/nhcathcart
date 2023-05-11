import { useState, Fragment } from "react";
import { Modal } from "./Modal";
import { Carousel } from "./Carousel";
import "../css/utility-classes.css";
import "../css/Projects.css";
export function ProjectPreview(props: { isOdd: boolean; thumbnail: string; link: string}) {
  const [showModal, setShowModal] = useState(false);
  const { isOdd, thumbnail, link } = props;
  return (
    <Fragment>
      <div
        className={
          isOdd
            ? "project-preview-container-right"
            : "project-preview-container-left"
        }
      >
        <div className="project-preview secondary box-shadow">
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
          <Carousel />
        </div>
      </Modal>
    </Fragment>
  );
}
