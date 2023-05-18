import { ReactElement } from "react";
import { ExNavbar } from "../components/Examples/ExNavbar"
import {ExModalButton} from "../components/Examples/ExModalButton"
import { Carousel } from "../components/Carousel";

interface component{
    title: string;
    description: string;
    example: ReactElement;
    JSX: string;
    CSS: string;
}
export const components: component[]= [
    {   
        "title": "Navbar",
        "description": `A simple reactive Navbar. This one is used on this website. Scale down
        your screen to see the mobile version.`,
        example: <ExNavbar/>,
        "JSX": `import "./css/Navbar.css";

        export function Navbar() {
          function toggleFullPageMenu() {
            const menu = document.querySelector(".full-page-menu");
            menu?.classList.toggle("full-page-menu-show");
          }
          return (
            <nav className="nav">
              <div className="title-container">
                <h1 className="title">title</h1>
              </div>
              <div className="hamburger-menu">
                <button
                  onClick={() => {
                    toggleFullPageMenu();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="full-page-menu">
                <button
                  className="nav-button-full"
                  onClick={() => {
                    //Whatever you want the button to do goes here
                    toggleFullPageMenu();
                  }}
                >
                  view1
                </button>
                <button
                  className="nav-button-full"
                  onClick={() => {
                    //Whatever you want the button to do goes here
                    toggleFullPageMenu();
                  }}
                >
                  view2
                </button>
                <button
                  className="nav-button-full"
                  onClick={() => {
                    //Whatever you want the button to do goes here
                    toggleFullPageMenu();
                  }}
                >
                  view3
                </button>
                <button
                  className="nav-button-full"
                  onClick={() => {
                    //Whatever you want the button to do goes here
                    toggleFullPageMenu();
                  }}
                >
                  view4
                </button>
              </div>
              <div className="nav-button-container">
                <button
                  className="nav-button"
                  onClick={() => {
                    //Whatever you want the button to do goes here
                  }}
                >
                  view1
                </button>
                <button
                  className="nav-button"
                  onClick={() => {
                    //Whatever you want the button to do goes here
                  }}
                >
                  view2
                </button>
                <button
                  className="nav-button"
                  onClick={() => {
                    //Whatever you want the button to do goes here
                  }}
                >
                  view3
                </button>
                <button className="nav-button">other stuff</button>
              </div>
            </nav>
          );
        }`,
        "CSS": `
      nav{
          display: flex;
          padding: 3%;
          width: 100%;
          height: 10%;
      }
      .title-container{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 20%;
      }
      
      .title{
          font-size: 30px;
          font-weight: bold;
      }
      
      .nav-button-container{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 80%;
      
      }
      .nav-button{
          font-size: 20px;
          padding: 15px;
          border-radius: 8px;
      }
      .nav-button:hover{
          background-color: #39537b;
          color: white;
      }
      .nav-button:active{
          transform: scale(.95);
      }
      .nav-button-full{
          font-size: 30px;
          /* font-weight: bold; */
          opacity: 1;
      }
      .full-page-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #39537b;
          z-index: 999;
          opacity: .9;
        }
      .hamburger-menu{
          display: none;
          align-items: center;
          justify-content: flex-end;
          width: 80%;
      }`
    },
    {   
        "title": "Modal",
        "description": `This is actually two components that make up a Modal. You'll need to place the button somewhere where you want to open the Modal from.`,
        example: <ExModalButton/>,
        "JSX": `
        import { Modal } from "./Modal"

        export function ModalButton () {

            const [showModal, setShowModal] = useState(false);

            return (
                <Fragment>
                    <button className="modal-button" onClick={() => setShowModal(true)}>Preview</button>
                    <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
                        <h1>hello</h1>
                    </Modal>
                </Fragment>
            )
        }

        interface props {
          isVisible: boolean;
          onClose: Function;
          children: ReactNode;
        }
        
        export function Modal({ isVisible, onClose, children }: props) {
          if (!isVisible) return null;
          function handleClose(e: any) {
            if (e.target.id === "modal-wrapper") {
              onClose();
            }
          }
        
          return (
            <div
              className="modal-wrapper"
              id="modal-wrapper"
              onClick={(e) => handleClose(e)}
            >
              <div className="modal-content">{children}</div>
            </div>
          );
        }`,
        "CSS": `
        .modal-button{
            background-color: #59536f;
            border-radius: 5px;
            padding: 1%;
        }
        .modal-button:hover{
            background-color: #645d7d;
        }
        .modal-button:active{
            transform: scale(.95);
        }
        .modal-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #7695b740;
            backdrop-filter: blur(4px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
            }

        .modal-content {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            height: 80%;
            width: 80%;
            padding: 0.5%;
            border-radius: 10px;
            background-color: #59536f;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.5);
            z-index: 4;
            }`
    },
    {   
        "title": "Carousel",
        "description": `This is a carousel component for displaying an array of images. It is setup to accept an array of filepaths as a strings for the images, but you could easily modify it to get an image from the web/S3/some other source. `,
        example: <Carousel images={["/media/ex-image-4.svg", "/media/ex-image-3.svg"]}/>,
        "JSX": `
import { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "../css/Carousel.css";

export function Carousel(props: {images: string[]}) {

  const [activeIndex, setActiveIndex] = useState(0);
  const { images } = props;

  function updateIndex(newIndex: number) {
    if (newIndex < 0) return;
    if (newIndex >= images.length) return;
    setActiveIndex(newIndex);
  }

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: \`translate(-\${activeIndex * 100}%)\` }}
      >
        {images.map((image) => {
          return (
            <CarouselItem image={image} />
          );
        })}
      </div>
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={() => updateIndex(activeIndex - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button className="carousel-button" onClick={() => updateIndex(activeIndex + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

import "../css/Carousel.css"
export function CarouselItem (props: { image: string }) {
    const { image } = props;
    return (
        <div className="carousel-item">
            <img className="carousel-image"src={image}/>
        </div>
    )
}`,
  CSS: `
.carousel{
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.carousel-inner{
    white-space: nowrap;
    transition: transform 0.3s;
    width: 100%;
}
.carousel-item{
    display: inline-flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.carousel-image{
    max-height: 600px;
    border-radius: 10px;
}
.carousel-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel-button{
    border-radius: 3px;
}
.carousel-button:hover{
    background-color: #4d485f;
}
.carousel-button:active{
    transform: scale(.90);
}`
    },
    
]