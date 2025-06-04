import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Bounce, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const passwordLength = /^.{8,32}$/;
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMsg(""); // Clear error when typing
  };

  const handleErrorMessage = (msg) => {
    setErrorMsg(msg);
    setFormData((prev) => ({
      ...prev,
      password: "",
      cpassword: "",
    }));
  };

  const inputValidator = () => {
    if (!emailPattern.test(formData.email)) {
      handleErrorMessage("Please enter a valid email");
      return false;
    } else if (!passwordLength.test(formData.password)) {
      handleErrorMessage("Password must have at least 8 characters");
      return false;
    } else if (!passwordPattern.test(formData.password)) {
      handleErrorMessage(
        "Password must include at least one uppercase, one lowercase, one number, and one special character"
      );
      return false;
    } else if (formData.password !== formData.cpassword) {
      handleErrorMessage("Passwords do not match");
      return false;
    } else {
      return true;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const isValid = inputValidator();
    if (isValid) {
      console.log("Hit Sign Up API");
      setloader(true);
      setTimeout(() => {
        const btnClose = document.querySelector("#close-signup-modal");
        btnClose.click();
        navigate("/");
        setloader(false);
        toast.success("Successful", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
      }, 2000);
    } else {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
      // Call your API here (e.g., fetch/axios)
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="signupModal"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary" id="signupModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                id="close-signup-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label htmlFor="signup-name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="signup-name"
                    placeholder="John Doe"
                    required
                    onChange={handleChange}
                    value={formData.name}
                    autoComplete="username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signup-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="signup-email"
                    placeholder="xyz@gmail.com"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    autoComplete="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signup-password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    id="signup-password"
                    placeholder="Enter your password"
                    required
                    onChange={handleChange}
                    value={formData.password}
                    autoComplete="new-password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signup-cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="cpassword"
                    id="signup-cpassword"
                    placeholder="Confirm your password"
                    required
                    onChange={handleChange}
                    value={formData.cpassword}
                    autoComplete="new-password"
                  />
                </div>

                {errorMsg && (
                  <p className="fs-6 text-danger" id="signup-error">
                    {errorMsg}
                  </p>
                )}

                <div className="mb-2">
                  <small className="text-secondary">
                    Already have an account?
                  </small>
                  <span
                    className="text-primary text-decoration-underline ms-1"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    data-bs-dismiss="modal"
                    aria-label="Login"
                    id="login-link"
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </span>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Loader isActive={loader} />
    </>
  );
};

export default SignUp;
