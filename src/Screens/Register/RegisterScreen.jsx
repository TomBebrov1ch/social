import React, { useLayoutEffect } from "react";

import { Link } from "react-router-dom";
import { gsap } from "gsap";

import "../Register/style.scss";

const RegisterScreen = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(".reg__main", { x: -400 }, { x: 60, duration: 0.45 });
    tl.to(".reg__main", { x: 0, duration: 0.35 });
  })
  return (
    <>
      <section className="reg-mob">
        <nav className="reg">
          <div className="reg__main">
            <h1>Зарегистрироваться</h1>
          </div>
          <div className="reg__inputs">
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
            <div className="reg__inputs__f">
              <p className="reg__inputs__text">Повторно введите пароль</p>
              <input
                className="reg__inputs__inp"
                type="text"
                placeholder="Введите пароль повторно"
              />
            </div>
          </div>
          <div className="reg__items">
            <button className="reg__items__btn">Зарегистрироваться</button>
            <p className="reg__items__al">
              Уже есть Аккаунт?
              <Link className="reg__items__al-l" to={"/login"}>
                Войти
              </Link>
            </p>
          </div>
        </nav>
      </section>
    </>
  );
};

export default RegisterScreen;
