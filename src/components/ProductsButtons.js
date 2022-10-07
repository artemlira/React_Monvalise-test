import React from 'react';
import '../style/productsButtons.scss';

export default function ProductsButtons({ text, className }) {
  return (
    <div
      className={`products__btn ${className}`}
    > {text}</div >
  )
}
