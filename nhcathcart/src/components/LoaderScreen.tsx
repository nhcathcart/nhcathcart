import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import "../css/LoaderScreen.css";
export function LoaderScreen() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const handleDOMReady = () => {
      setTimeout(() => setShowOverlay(false), 200);
    };

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      handleDOMReady();
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMReady);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMReady);
    };
  }, []);
  return (
    <>
      <div
        className={
          showOverlay
            ? "overlay primary-darker"
            : "overlay-hiding primary-darker"
        }
      >
        <Logo />
      </div>
    </>
  );
}
