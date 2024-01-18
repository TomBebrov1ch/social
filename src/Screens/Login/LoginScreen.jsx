import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="reg__inputs">
        <h1 className="login__main">Войти</h1>
        <div className="reg__inputs__f">
          <p className="reg__inputs__text">Ваше имя</p>
          <input
            className="reg__inputs__inp"
            type="text"
            placeholder="Введите ваше имя"
          />
        </div>
        <div className="reg__inputs__f">
          <p className="reg__inputs__text">Ваш пароль</p>
          <input
            className="reg__inputs__inp"
            type="text"
            placeholder="Введите ваш пароль"
          />
        </div>
      </div>
      <div className="login__items">
        <button className="reg__items__btn">Войти</button>
        <p className="reg__items__al">
          Еще не зарегистрировались?
          <Link className="reg__items__al-l" to={"/register"}>
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
