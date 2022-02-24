import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

export default function Login() {

  const loginreducer = useSelector(state => state.loginReducer)
  const {loading, error} = loginreducer
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  function login(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user))
  }
  useEffect(() =>{


    if(localStorage.getItem('currentUser')){
      window.location.href='/'
    }
  })
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-5 card card_registration p-4"
            style={{ marginTop: "150px" }}
          >
            <div className="div">
              <h2 className="text-center fw-bolder">LOGIN</h2>

              {error && (<Error error="Invalid Email or Password!!!"/>)}
              {loading && (<Spinner/>)}

              <form onSubmit={login}>
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
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className="btn btn-primary mt-3">
                    Login{" "}
                  </button>
                </div>
                <a
                  className="text-info d-grid gap-2 d-md-flex justify-content-md-end mt-4"
                  href="/register"
                >
                  if You don't Have a account? please Register!!
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
