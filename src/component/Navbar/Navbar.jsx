import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const HandleHamburger = () => {
    if (
      document.querySelector(".navbar").classList.contains("sticky-top") &&
      window.scrolly > 45
    ) {
      document.querySelector(".navbar").classList.remove("sticky-top");
    }
    document.querySelector(".navbar").classList.toggle("sticky-top");
  };
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    window.onscroll = function () {
      if (document.documentElement.scrollTop > 45) {
        document
          .querySelector(".navbar")
          .classList.add("sticky-top", "shadow-sm");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("sticky-top", "shadow-sm");
      }
    };

    const dropdownElement = document.querySelector(".dropdown");
    const dropdownMenuElement = document.querySelector(".dropdown-menu");
    const dropdownToggleElement = document.querySelector(".dropdown-toggle");
    const showClass = "show";

    const handleMouseEnter = () => {
      if (dropdownElement && dropdownMenuElement && dropdownToggleElement) {
        dropdownElement.classList.add(showClass);
        dropdownToggleElement.setAttribute("aria-expanded", "true");
        dropdownMenuElement.classList.add(showClass);
      }
    };

    const handleMouseLeave = () => {
      if (dropdownElement && dropdownMenuElement) {
        dropdownElement.classList.remove(showClass);
        dropdownMenuElement.classList.remove(showClass);
      }
    };

    const handleWindowResize = () => {
      if (dropdownElement && dropdownMenuElement && dropdownToggleElement) {
        if (window.matchMedia("(min-width: 992px)").matches) {
          dropdownElement.addEventListener("mouseenter", handleMouseEnter);
          dropdownElement.addEventListener("mouseleave", handleMouseLeave);
        } else {
          dropdownElement.removeEventListener("mouseenter", handleMouseEnter);
          dropdownElement.removeEventListener("mouseleave", handleMouseLeave);
        }
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      if (dropdownElement) {
        dropdownElement.removeEventListener("mouseenter", handleMouseEnter);
        dropdownElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <nav className="nav-container navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3"></i>Restaurant
        </h1>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        onClick={HandleHamburger}
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-item nav-link">
            About
          </NavLink>
          <div
            className="nav-item nav-link"
            data-bs-toggle="modal"
            data-bs-target="#cartModal"
            id="cart-link"
          >
            Cart
          </div>
          <div className="nav-item nav-link">Order</div>
          <div className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </button>
            <div className="dropdown-menu m-0">
              <NavLink to="/team" className="dropdown-item">
                Our Team
              </NavLink>
              <NavLink to="/testimonial" className="dropdown-item">
                Testimonial
              </NavLink>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary py-2 px-4"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          id="login-link"
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
