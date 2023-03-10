import React from "react";

export function Navbar (){
    return (
        <div>
            <div className="navbar bg-primary text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        <li><label htmlFor="my-modal-4" className="btn btn-primary">Splache</label></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                    </div>
                    <div className="nhcathcart-title">
                        <a className="btn btn-ghost normal-case text-xl">nhcathcart</a>
                    </div>
                </div>
            </div>
            
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box h-[80vh] w-[80vw]" htmlFor="">
                <iframe className="w-full h-full"
                    src="http://www.splachejs.com">
                </iframe>
            </label>
            </label>
        </div>
    )
}