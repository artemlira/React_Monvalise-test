import React from 'react';
import '../style/main.scss';
import ProductsButtons from './ProductsButtons';
import MainCatalog from './MainCatalog';
import { Routes, Route } from 'react-router-dom';
import MainHome from './MainHome';
import MainWoman from './MainWomen';
import MainMen from './MainMen';
import MainChildrens from './MainChildrens';
import MainAuction from './MainAuction';
import MainBrands from './MainBrands';
import MainShares from './MainShares';
import MainAuthentication from './MainAuthentication';
import MainBlog from './MainBlog';



export default function Main() {

  const productsButtons = ['Попередня', '1', '2', '3', '4', '5', '6', '7', '8', 'Наступна'];

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
        <Routes>
          <Route index element={<MainHome />} />
          <Route path='catalog' element={<MainCatalog />} />
          <Route path='women' element={<MainWoman />} />
          <Route path='men' element={<MainMen />} />
          <Route path='childrens' element={<MainChildrens />} />
          <Route path='auction' element={<MainAuction />} />
          <Route path='brands' element={<MainBrands />} />
          <Route path='shares' element={<MainShares />} />
          <Route path='authentication' element={<MainAuthentication />} />
          <Route path='blog' element={<MainBlog />} />
        </Routes>
        <siction className="wrapper__buttons">
          <div></div>
          <div className='products__buttons'>
            {productsButtons.map(item =>
              <ProductsButtons key={Math.random() * 100} text={item} />
            )}
          </div>
        </siction>
      </div>
    </div>
  )
}
