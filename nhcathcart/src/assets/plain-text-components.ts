export const components = {
    navbar : `export function NavBar() {

        const state = useAppSelector((state) => state.viewChoice);
        const dispatch = useAppDispatch();
    
        return (
        <nav className="text">
            <div className="title-container">
                <h1 className="title">title</h1>
            </div>
            <div className="nav-button-container">
                <button className="nav-button" onClick={()=>{dispatch(chooseView1())}}>view1</button>
                <button className="nav-button" onClick={()=>{dispatch(chooseView2())}}>view2</button>
                <button className="nav-button" onClick={()=>{dispatch(chooseView3())}}>view3</button>
                <button className="nav-button" onClick={()=>{dispatch(chooseView4())}}>view4</button>
            </div>
        </nav>
        );`,
    navbarCSS : `
    .page-container{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
    
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
        background-color: #59536F;
        color: white;
    }
    .nav-button:active{
        transform: scale(.95);
    }`
}