import { useState, Fragment } from "react";
import { Modal } from "./Modal";
import "../css/utility-classes.css";
import "../css/Projects.css";
export function ProjectPreview() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="project-preview-container">
        <div className="project-preview secondary box-shadow">
          this is where the preview goes
          <button onClick={() => setShowModal(true)}>showModal</button>
        </div>
        
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="modal-preview">
          This is the content of the modal
        </div>
      </Modal>
    </Fragment>
  );
}
