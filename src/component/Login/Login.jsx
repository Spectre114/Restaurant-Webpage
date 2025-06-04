import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { loginAuth } from "../../api/loginAuth"; // Adjust the path as needed
//import { loginAuth, setAuthTokenCookie } from "../../api/loginAuth"; // Adjust imports to your project structure

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoader(true);
    setErrorMsg("");

    try {
      const response = await loginAuth(formData);

      if (response?.status === 200) {
        setAuthTokenCookie(response?.data?.token, response?.data?.userId);
        setIsAuthenticated(true);

        const btnClose = document.querySelector("#close-login-modal");
        btnClose?.click();

        navigate("/");
      } else {
        toast.error("Something Went Wrong", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error?.response?.data || "Login failed");
      setFormData((prev) => ({
        ...prev,
        password: "",
      }));

      if (error?.code === "ERR_NETWORK") {
        toast.error("Network Error", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
      }
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const btnClose = document.querySelector("#close-login-modal");
    const overlay = document.querySelector("#loginModal");
    const modalDialog = document.querySelector("#loginbody");

    const handleOverlayClick = () => {
      setErrorMsg("");
      setFormData({ email: "", password: "" });
    };

    const stopPropagation = (e) => e.stopPropagation();

    modalDialog?.addEventListener("click", stopPropagation);
    overlay?.addEventListener("click", handleOverlayClick);
    btnClose?.addEventListener("click", handleOverlayClick);

    return () => {
      modalDialog?.removeEventListener("click", stopPropagation);
      overlay?.removeEventListener("click", handleOverlayClick);
      btnClose?.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <div
      className="modal fade"
      id="loginModal"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" id="loginbody">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary" id="loginModalLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              id="close-login-modal"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="xyz@gmail.com"
                  autoComplete="username"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="********"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {errorMsg && <p className="fs-6 text-danger">{errorMsg}</p>}

              <div className="mb-2">
                <small className="text-secondary">Don't have an account?</small>
                <span
                  className="text-primary text-decoration-underline ms-1"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  data-bs-dismiss="modal"
                  id="signup-link"
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loader}
              >
                {loader ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
