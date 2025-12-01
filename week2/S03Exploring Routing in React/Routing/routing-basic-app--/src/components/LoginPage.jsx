import { useNavigate } from "react-router-dom";

 function LoginPage(){
    let navigate = useNavigate()
    const handelLogin=()=>{
        alert("login Succesful...");
        navigate("/home");
    }
    return(
        <>
        <h2>LoginPage....</h2>
        <button onClick={handelLogin}>Login</button>
        </>
    )
}
export default LoginPage;