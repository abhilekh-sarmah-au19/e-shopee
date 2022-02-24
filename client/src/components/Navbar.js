import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartReducer } from "../reducers/cartReducer";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartreducer = useSelector((state) => state.cartReducer);

  const { cartItems } = cartreducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch()

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            E-Shoppee
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse Buttons navbar-collapse" id="navbarNav">
            {currentUser ? (
              <div className="dropdown me-3">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 {currentUser.name}
              </button>
              <div className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
                <a className="dropdown-item" href="/profile">Profile</a>
                <a className="dropdown-item" href="/orders">Orders</a>
                <div className="d-grid gap-2">
                <a className="btn btn-dark" onClick={()=> {dispatch(logoutUser())}}>Logout</a>
                </div>
              </div>
            </div>
            ) : (
              <div className="nav-item">
                <a className="nav-link fw-bold" href="/login">
                  Login
                </a>
              </div>
            )}

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/cartItems">
                  <ShoppingCartIcon className="Icon_shopping" />
                  <span className="length">{cartItems.length}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
