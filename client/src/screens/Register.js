import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Success from "../components/Success";
export default function Register() {

  const registerstate = useSelector(state=>state.registerNewUserReducer)

  const {loading, error, success} = registerstate


  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const dispatch = useDispatch()

    function register(e){

        e.preventDefault()
            const user={
                name:name,
                email:email,
                password:password,
            }
            if(password===cpassword){
                dispatch(registerNewUser(user))
            }
            else{
                alert('password do not match!!')
            }
        
    }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 card p-4 card_registration" style={{marginTop:'150px'}}>
          <div className="div">
            <h2 className="text-center fw-bolder">Register</h2>

            {loading && (<Spinner/>)}
            {error && (<Error error='Email Address is Already Registered'></Error>)}
            {success && (<Success success="Your Registration is SuccessFull!! Please Login!!"/>)}

                <form onSubmit={register}>
                <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Enter Your password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Confirm Your password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
              required
            />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-primary mt-3">Register</button>
            </div>
            <a className="text-info d-grid gap-2 d-md-flex justify-content-md-end mt-4" href="/login">if You already Have a account? please login!!</a>
                </form>
          </div>
        </div>
      </div>
    </div>
  );
}
