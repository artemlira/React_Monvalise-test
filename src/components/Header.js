import React from 'react';
import { header } from './imagesDB';
import '../style/header.scss';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__title'>
        <div className='container container__title'>
          <img className='title__img like' src={header[3]} alt='like' />
          <img className='title__img dress' src={header[2]} alt='dress' />
          <p className='title__text'>Брендовий верхній одяг від 899 грн</p>
        </div>
      </div>
      <div className='container header__container'>
        <div className='header__main'>
          <div className='header__logo'>
            <img className='logo' src={header[4]} alt='logo' />
          </div>
          <form className='header__form'>
            <input
              className='form__text'
              type='text'
              placeholder='Знайти речі або бренди' />
            <button className='form__button'>Додати товар</button>
            <div className='dropdown'>
              <select name="target">
                <option selected>Укр</option>
                <option>Рус</option>
                <option>Eng</option>
              </select>
            </div>
          </form>
          <div className='menu'>
            <div className='icons'>
              <div className='core'>
                <img src={header[1]} alt='core' />
              </div>
              <div className='message'>
                <img src={header[5]} alt='message' />
              </div>
              <div className='trash'>
                <img src={header[7]} alt='trash' />
              </div>
            </div>
            <div className='profile'>
              <img src={header[0]} alt='avatar' />
              <div className='vector'>
                <img src={header[8]} alt='vector' />
              </div>
            </div>
          </div>
        </div>
        <nav className='header__nav'>
          <ul className='nav__list'>
            <li className='nav__item'>Головна</li>
            <li className='nav__item active'>Каталог</li>
            <li className='nav__item'>Жінкам</li>
            <li className='nav__item'>Чоловікам</li>
            <li className='nav__item'>дИТЯЧі речі</li>
            <li className='nav__item'>Аукціон</li>
            <li className='nav__item'>Бренди</li>
            <li className='nav__item'>Акції</li>
            <li className='nav__item'>Аутентифікація</li>
            <li className='nav__item'>Блог</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
