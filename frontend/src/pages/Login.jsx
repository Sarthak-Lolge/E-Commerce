import { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
  function onSubmitHandler(e){
    e.preventDefault();
  }
  return (
    <div className="my-5  px-5 d-flex justify-content-center align-items-center  ">
      <div>
        <form onSubmit={onSubmitHandler} className="d-flex flex-column gap-3">
          <div>
            <p className="prata-regular fs-2 text-center">{currentState}</p>
          </div>
          {
          currentState === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              className="ps-2 py-2 rounded"
              style={{ width: "50vh" }}
              placeholder="Name" required
            />
          )}

          <input
            type="text"
            className="ps-2 py-2 rounded"
            style={{ width: "50vh" }}
            placeholder="Email" required
          />
          <input
            type="text"
            className="ps-2 py-2 rounded"
            style={{ width: "50vh" }}
            placeholder="Password" required
          />
          <div className="d-flex justify-content-between">
            <p style={{cursor:"pointer"}}>Forgot your password</p>
            { 
              currentState === 'Login' ? <p style={{cursor:"pointer"}} onClick={()=>setCurrentState('Sign Up')}>Create Account</p> : <p style={{cursor:"pointer"}} onClick={()=>setCurrentState("Login")}>Login Here</p>
            }

          </div>
          <div className="text-center">
          <button className="w-25 bg-dark text-light" type="submit" >{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
