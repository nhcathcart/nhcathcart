import { ReactNode } from "react";
import "./exCss/ExModal.css"
interface props {
  isVisible: boolean;
  onClose: Function;
  children: ReactNode;
}

export function ExModal({ isVisible, onClose, children }: props) {
  if (!isVisible) return null;
  function handleClose(e: any) {
    if (e.target.id === "ex-modal-wrapper") {
      onClose();
    }
  }

  return (
    <div
      className="ex-modal-wrapper"
      id="ex-modal-wrapper"
      onClick={(e) => handleClose(e)}
    >
      <div className="ex-modal-content">{children}</div>
    </div>
  );
}