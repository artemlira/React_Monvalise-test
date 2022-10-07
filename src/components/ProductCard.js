import React from 'react';
import '../style/productCard.scss';


export default function ProductCard({ image, organic, heart, top, brand, title, priceOld, priceNow, locationIcon, locationText, brandIcon, brandText }) {
  return (
    <div className='wrapper__card'>
      <div className='card__image'>
        <span className={organic ? 'organic active' : 'organic'}
        >organic</span>
        <div className='heart'>
          <img src={heart} alt='heart' /></div>
        <div className='image'>
          <img src={image} alt='clothes' />
        </div>
        <span className={top ? 'top active' : 'top'}>топ</span>
      </div>
      <div className='card__main'>
        <div className=''>
          <p className='card__brand'>{brand}</p>
          <h3 className='card__title'>{title}</h3>
        </div>
        <div className='card__info'>
          <div className='price'>
            <p className='price__old'>{priceOld}</p>
            <p className='price__now'>{priceNow}</p>
          </div>
          <div className='location'>
            <div>
              <img src={locationIcon} alt='location' />
              <p>{locationText}</p>
            </div>
            <div className='brand'>
              <img src={brandIcon} alt='brand' />
              <p>{brandText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
