import { useRef } from "react";
function GetInput(){
    let focusInput = useRef();
    let focusButton = useRef();
    function handelInput(){
        focusInput.current.focus();
        focusInput.current.style.backgroundColor = "pink";
        focusInput.current.style.fontSize = "20px";
        focusInput.current.style.borderRadius = "10px";
        focusInput.current.style.padding = "10px";

        focusButton.current.style.backgroundColor="blue";

    }

    return(
        <>
            <input ref={focusInput} type='text' placeholder="Type SomeThing">
            </input>
            <button ref={focusButton} onClick={handelInput}>Click Me</button>
        </>
    )
}
export default GetInput;