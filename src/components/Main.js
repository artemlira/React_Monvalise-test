import React from 'react';
import '../style/main.scss';
import Details from './Details';
import { main,  } from '../components/imagesDB.js';


export default function Main() {
  return (
    <div className='main'>
      <div className='container'>
        <header className='main__header'>
          <p>Головна <span>/ Каталог одягу</span></p>
        </header>
        <div className='main__title'>
          <h2>Каталог одягу</h2>
        </div>
        <div className='main__sort'>
          <h3 className='sort__title'>Фільтри</h3>
          <div className='sort__list'>
            <p>Сортувати за:</p>
            <select name="target">
              <option selected>За замовчуванням</option>
              <option>По ціні</option>
              <option>За популярністю</option>
            </select>
          </div>
        </div>
        <section className='main__body'>
          <div className='body__filters'>
            <Details title='Категорії' />
            <Details
              title='Ціна'
              text={(<>
                <img src={main[0]} alt='' />
                <form className=''>
                  <input type="checkbox" name="Жінкам" />Жінкам
                  <input type="checkbox" name="Чоловікам" />Чоловікам
                  <input type="checkbox" name="Унісекс" />Унісекс
                </form>
              </>)} />
            <Details title='Продавець' />
            <Details title='Бренд' />
            <Details title='Стать' />
            <Details title='Розмір' />
            <Details title='Колір' />
            <Details title='Матеріал' />
            <Details title='Сезон' />
            <Details title='Стиль' />
          </div>
          <div className='body__products'></div>
        </section>
      </div>
    </div>
  )
}
