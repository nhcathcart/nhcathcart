import { Fragment } from "react";
import { Carousel } from "./Carousel";
import "../css/utility-classes.css";
import "../css/Other.css";
import { LoaderScreen } from "./LoaderScreen";

export function OtherStuff() {
  const pastaImages = [
    "/media/pasta-image-1.jpeg",
    "/media/pasta-image-2.jpeg",
    "/media/pasta-image-3.jpeg",
    "/media/pasta-image-4.jpeg",
  ];
  return (
    <div className="other-container-parent">
      <LoaderScreen />
      <div className="other-container text">
        <h2 className="other-title">Pasta</h2>
        <Carousel images={pastaImages} align-self="center" />
      </div>
      <div className="other-container text">
        <h2 className="other-title text">Playlists</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/7fe24pHseJUwlnAb54I4qK"
          width="100%"
          height="380"
          allow="encrypted-media"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/playlist/0vrBiiUhCWPDOCUb6jdnvN"
          width="100%"
          height="380"
          allow="encrypted-media"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/playlist/28QWTTUAS5tKYUl0y272nI"
          width="100%"
          height="380"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
