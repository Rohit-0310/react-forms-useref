import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
    //Input Box
    const inputRef = useRef(null);
    // {Current: null}

    return (
        <div className="App">
            <input ref={inputRef} />

            <button 
                onClick={() => {
                    console.log(inputRef.current.value);
                }}
            >
                Get InputBox
            </button>
            
            <div style={{
                    display: "flex",
                    background: "coral",
                    width: "50px",
                    height: "300px",
                }}
                >1
            </div>
            <div style={{
                    display: "flex",
                    background: "red",
                    width: "50px",
                    height: "300px",
                }}
                >2
            </div>
            <div style={{
                    display: "flex",
                    background: "blue",
                    width: "50px",
                    height: "300px",
                }}
                >3
            </div>
            <div style={{
                    display: "flex",
                    background: "aquamarine",
                    width: "50px",
                    height: "300px",
                }}
                >4
            </div>
            //scrollIntoView Btn Working
            <button 
                onClick={() => {
                    inputRef.current.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
            >
                Go To The Top
            </button>
        </div>

);











    
    // //useRerender
    // const test = useRef(1);
    // // {Current : 1}
    // const [d, setD] = useState(1);

    // console.log("Rerender",test)
    // return (
    //     <div className="App">
    //         <button 
    //         onClick={() => {
    //             test.current = test.current + 1;
    //             console.log(test);
    //         }}
    //         >
    //             Increment Test
    //         </button>

    //         <button
    //             onClick={() => {
    //                 // Force re-rendering
    //                 setD((p) => p + 1);
    //             }}
    //         >
    //             Rerender
    //         </button>
    //   </div>
    // );




    // // onMouseMove
    // const [mouse, setMouse] = useState("");
    // return (
    //     <div 
    //         onMouseMove={(e) => {
    //             console.log(e.clientX, e.clientY);
    //             setMouse(`X: ${e.clientX} - Y:${e.clientY}`);
    //         }}
    //   className="App"
    //   style={{
    //       display: "flex",
    //       background: "coral",
    //       width: "300px",
    //       height: "300px",
    //   }}
    //   >
    //       {mouse}
    //   </div>
    // );
}

export default App;
