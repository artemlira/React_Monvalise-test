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
          </form>
          <div className='menu'>
            <div className='dropdown'>

            </div>
            <div className='icons'>
              <img src={header[1]} alt='core' />
              <img src={header[5]} alt='message' />
              <img src={header[7]} alt='trash' />
            </div>
            <div className='profile'>
              <img src={header[0]} alt='avatar' />
            </div>
          </div>
        </div>
        <nav className='header__nav'>
          <ul>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
