import React from "react";

import '../Register/style.scss'

const RegisterScreen = () => {
  return <>
    <section className="reg-mob">
      <nav className="reg">
        <div className="reg__main">
          <h1>Зарегистрироваться</h1>
        </div>
        <div className="reg__inputs">
          <div className="reg__inputs__f">
            <p>Ваше имя</p>
            <input type="text" placeholder="Введите ваше имя" />
          </div>
          <div className="reg__inputs__f">
            <p>Ваш пароль</p>
            <input type="text" placeholder="Введите ваш пароль" />
          </div>
          <div className="reg__inputs__f">
            <p>Повторно введите пароль</p>
            <input type="text" placeholder="Введите пароль повторно" />
          </div>
        </div>
      </nav>
    </section></>
};

export default RegisterScreen;
