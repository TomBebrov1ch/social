import React from "react";
import { Link } from "react-router-dom";

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
            <Link className="welcome__choose__reg" to={"/register"}>
              Регистрация
            </Link>
            <Link className="welcome__choose__login" to={"/login"}>
              Войти
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeScreen;
