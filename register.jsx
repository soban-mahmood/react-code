import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postMan = { username, email, pass, fname, lname };
    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        body: JSON.stringify(postMan),
      });
      const data = await response.json();
      console.log("succes", data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <div className="page-title">Register</div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-9 col-sm-11">
            <div className="my-form">
              <form
                onSubmit={handleSubmit}
                className="account-form w-100"
                action="https://heavengamers.com/register"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="UqexM1uLjxoSgtDPUUcUTsKLirN5Qx51D7YDlWzB"
                />
                <div className="row mt-5">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        id="username"
                        type="text"
                        className="form-control checkUser"
                        name="username"
                        defaultValue=""
                        required=""
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control checkUser"
                        name="email"
                        defaultValue=""
                        required=""
                        placeholder="E-Mail Address"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstname">First Name</label>
                      <input
                        id="firstname"
                        type="text"
                        className="form-control"
                        name="firstname"
                        defaultValue=""
                        required=""
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)}
                        value={fname}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastname">Last Name</label>
                      <input
                        id="lastname"
                        type="text"
                        className="form-control"
                        name="lastname"
                        defaultValue=""
                        required=""
                        placeholder="Last Name"
                        onChange={(e) => setLname(e.target.value)}
                        value={lname}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        required=""
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="password-confirm">Confirm Password</label>
                      <input
                        id="password-confirm"
                        type="password"
                        className="form-control"
                        name="password_confirmation"
                        required=""
                        autoComplete="new-password"
                        placeholder="Confirm Password"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group"></div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        defaultChecked=""
                        required=""
                        className="custom-form-input"
                      />
                      <label className="custom-form-label">
                        By Signup you are agree on the{" "}
                        <a href="termsofservice.html">Terms of Service</a> and
                        <a href="privacypolicy.html">Privacy Policy</a> of the
                        site
                      </label>
                    </div>
                    <div className="col-12">
                      <div className="text-center">
                        <button type="submit" className="btn btn-custom mt-3">
                          Register Now
                        </button>
                      </div>
                      <div className="or-text d-flex align-items-center">
                        <span className="line px-2" />
                        <strong className="px-3 py-2">or</strong>
                        <span className="line" />
                      </div>
                      <a
                        href="https://accounts.google.com/o/oauth2/auth?client_id=88551250982-00srnngkc8kv0f5t6mqhuq84n3jre17i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fheavengamers.com%2Fauth%2Fgoogle%2Fcallback&scope=openid+profile+email&response_type=code&state=5KlyTLEQ9QhCDN8zzfZYFiyXKLEa6ux62HleEdPn"
                        className="submit-btn bg-blue d-flex justify-content-center google-btn-anchor google-btn "
                      >
                        <img
                          src="../frontend/images/google-icon.svg"
                          alt="google"
                          className="me-3"
                        />
                        Sign up with Google
                      </a>
                      <p className="text-center mt-3">
                        <span className="text-white">Have an account?</span>{" "}
                        <a href="login.html" className="text-white">
                          Login here
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const regNode = document.getElementById("reg-list");
const root = createRoot(regNode);
root.render(<Register />);
