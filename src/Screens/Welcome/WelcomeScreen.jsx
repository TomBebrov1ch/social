import React from "react";
import { gsap } from "gsap/gsap-core";
import { Link } from "react-router-dom";

import '../Welcome/style.scss'

const handleHover = (target) => {
  animateObject(target);
};

const animateObject = (target) => {
  gsap.to(target, {
    x: 40,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      gsap.to(target, { x: 0, duration: 0.5, ease: "power2.in" });
    },
  });
};

const WelcomeScreen = () => {
  return (
    <>
      <section className="mob-sec">
        <div className="welcome">
          <div className="welcome__main">
            <h1 className="welcome__main__text">
              Добро пожаловать в крутую социальную сеть
            </h1>
          </div>
          <div className="welcome__choose">
            <Link className="welcome__choose__reg" to={"/register"} onMouseEnter={() => handleHover(".welcome__choose__reg")}>
              Регистрация
            </Link>
            <Link className="welcome__choose__login" to={"/login"} onMouseEnter={() => handleHover(".welcome__choose__login")}>
              Войти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeScreen;
