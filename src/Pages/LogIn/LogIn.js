import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-10 w-3/4 mx-auto rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-center text-3xl font-semibold">Login !</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-xl text-center font-medium">Or</p>
            <div className="form-control">
              <button className="btn btn-primary">Google</button>
            </div>
            <p className="text-xl font-bold text-center">
              New User?
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
