import { useAppSelector, useAppDispatch } from "../hooks";
import { chooseAbout, chooseSandBox } from "../reducers/viewReducer";
import {About} from './About'

export function NavBar() {

    const state = useAppSelector((state) => state.viewChoice);
    const dispatch = useAppDispatch();

    function scrollIntoView(id:string){
        const container = document.getElementById("content")
        const element = document.getElementById(id)
        container?.scroll({
            top: element?.offsetTop,
            behavior: 'smooth'
          });
    }
    return (
      <div className="relative min-h-screen h-[100vh] w-[100vw] md:flex">
        {/* navbar */}
        <div className="bg-emerald-700 text-stone-200 font-bold flex justify-between items-center md:hidden">
          <a href="" className="block p-4">
            sockdrawer
          </a>
          <button
            className="p-4"
            onClick={() => {
              const sidebar = document.querySelector(".side-bar-menu");
              sidebar?.classList.toggle("-translate-x-full");
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
        <div className="side-bar-menu bg-emerald-700 text-stone-200 w-64 p-4 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <h1 className="text-3xl py-2 px-4 text-white">nhcathcart</h1>
          <nav>
            <button
              className="block py-2 px-4 transition duration-100 hover:bg-blue-500 hover:text-white rounded"
              onClick={() => scrollIntoView('About')}
            >
              About
            </button>
            <button
              className="block py-2 px-4 transition duration-100 hover:bg-blue-500 hover:text-white rounded"
              onClick={() => scrollIntoView('Sandbox')}
            >
              Sandbox
            </button>
          </nav>
        </div>
        {/* content */}
        <div className="p-20 flex bg-slate-50 flex-col overflow-scroll w-full h-full" id="content">
            <About/>
            <h1 id="Sandbox">SandBox</h1>
        </div>
        
      </div>
    );
  }
  