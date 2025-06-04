import React, { useEffect, useState } from "react";
import { MenuElement } from "./MenuElement";
import "./menu.scss";
import { fetchMealsByType } from "../../api/fetchMenu";

const priceArray = [50, 60, 70, 80, 90, 95];
const text =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, at nihil impedit deleniti, laboriosam autem esse, sunt nobis libero ea.";

const Menu = () => {
  const [menu, setMenu] = useState();
  const [showLoginMsg, setShowLoginMsg] = useState(false);
  const [activeTab, setActiveTab] = useState("breakfast");

  const getMenu = async (mealType) => {
    const data = await fetchMealsByType(mealType);
    let i = 0;
    data?.recipes?.forEach((recipe) => {
      recipe.price = priceArray[i++ % priceArray.length];
      recipe.desc = text;
      recipe.quantity = 1;
    });
    setMenu(data);
    setActiveTab(mealType);
  };

  useEffect(() => {
    getMenu("breakfast");
  }, []);

  return (
    <div className="my-container">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
      </div>

      <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
          <li className="nav-item" onClick={() => getMenu("breakfast")}>
            <a
              className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${
                activeTab === "breakfast" ? "active" : ""
              }`}
              data-bs-toggle="pill"
              href="#tab-breakfast"
            >
              <i className="fa fa-coffee fa-2x text-primary"></i>
              <div className="ps-3">
                <small className="text-body">Popular</small>
                <h6 className="mt-n1 mb-0">Breakfast</h6>
              </div>
            </a>
          </li>
          <li className="nav-item" onClick={() => getMenu("lunch")}>
            <a
              className={`d-flex align-items-center text-start mx-3 pb-3 ${
                activeTab === "lunch" ? "active" : ""
              }`}
              data-bs-toggle="pill"
              href="#tab-lunch"
            >
              <i className="fa fa-hamburger fa-2x text-primary"></i>
              <div className="ps-3">
                <small className="text-body">Special</small>
                <h6 className="mt-n1 mb-0">Lunch</h6>
              </div>
            </a>
          </li>
          <li className="nav-item" onClick={() => getMenu("dinner")}>
            <a
              className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${
                activeTab === "dinner" ? "active" : ""
              }`}
              data-bs-toggle="pill"
              href="#tab-dinner"
            >
              <i className="fa fa-utensils fa-2x text-primary"></i>
              <div className="ps-3">
                <small className="text-body">Lovely</small>
                <h6 className="mt-n1 mb-0">Dinner</h6>
              </div>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            id="tab-breakfast"
            className={`tab-pane fade show p-0 ${
              activeTab === "breakfast" ? "active" : ""
            }`}
          >
            <div className="row gy-4" id="breakfast-menu">
              <MenuElement
                menu={menu}
                setMenu={setMenu}
                setShowLoginMsg={setShowLoginMsg}
              />
            </div>
          </div>
          <div
            id="tab-lunch"
            className={`tab-pane fade show p-0 ${
              activeTab === "lunch" ? "active" : ""
            }`}
          >
            <div className="row gy-4" id="lunch-menu">
              <MenuElement
                menu={menu}
                setMenu={setMenu}
                setShowLoginMsg={setShowLoginMsg}
              />
            </div>
          </div>
          <div
            id="tab-dinner"
            className={`tab-pane fade show p-0 ${
              activeTab === "dinner" ? "active" : ""
            }`}
          >
            <div className="row gy-4" id="dinner-menu">
              <MenuElement
                menu={menu}
                setMenu={setMenu}
                setShowLoginMsg={setShowLoginMsg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
