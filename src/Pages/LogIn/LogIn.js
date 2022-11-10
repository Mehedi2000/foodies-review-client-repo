import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const LogIn = () => {
  const { login, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  // google login
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-10 w-3/4 mx-auto rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-3xl font-semibold mt-4">Login !</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-xl text-center font-medium">Or</p>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn btn-primary">
                Google LogIn
              </button>
            </div>
            <p className="text-xl font-bold text-center">
              New User?
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
