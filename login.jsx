import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

const LoginList = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "http://localhost:8000/users?email=" + email + "&_limit=1",
        "http://localhost:8000/users?pass=" + pass + "&_limit=1"
      );

      const users = response.data;

      const userExist = users.find(
        (user) => user.pass === pass && user.email === email
      );

      if (userExist) {
        console.log("You are already registered");
      } else {
        console.log("Please register now");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <div className="page-title">Login</div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-10">
            <div className="my-form">
              <form
                className="account-form"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="UqexM1uLjxoSgtDPUUcUTsKLirN5Qx51D7YDlWzB"
                />
                <div className="form-group">
                  <label>
                    Username &amp; Email <sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    name="username"
                    defaultValue=""
                    placeholder="Enter username or email"
                    className="form-control"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Password <sup className="text-danger">*</sup>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    required=""
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                  />
                </div>
                <div className="form-group text-start">
                  <div>
                    <div className="form-check ">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="remember"
                      />
                      <label className="form-label">Remember Me</label>
                    </div>
                  </div>
                </div>
                <div className="form-group text-end">
                  <a href="../auth/password/reset.html" className="text-white">
                    Forget Password?
                  </a>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-custom">
                    Login Now
                  </button>
                </div>
                <div className="or-text d-flex align-items-center">
                  <span className="line px-2" />
                  <strong className="px-3 py-2">or</strong>
                  <span className="line" />
                </div>
                <a
                  href="https://accounts.google.com/o/oauth2/auth?client_id=88551250982-00srnngkc8kv0f5t6mqhuq84n3jre17i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fheavengamers.com%2Fauth%2Fgoogle%2Fcallback&scope=openid+profile+email&response_type=code&state=QGTczBhMa4oGKMganWDcIe1bV1Z6lyrXB7UkpiI6"
                  className="submit-btn bg-blue d-flex justify-content-center google-btn-anchor google-btn"
                >
                  <img
                    src="../frontend/images/google-icon.svg"
                    alt="google"
                    className="me-3"
                  />
                  Sign in with Google
                </a>
                <p className="text-center text-white mt-3">
                  <span className="">New to Heaven Gamers?</span>
                  <a href="register.html" className="text-base">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const loginNode = document.getElementById("login-list");
const root = createRoot(loginNode);
root.render(<LoginList />);
