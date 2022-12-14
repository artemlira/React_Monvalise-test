import React from 'react';
import Details from './Details';
import { main, mainProducts } from '../components/imagesDB.js';
import Checkbox from './Checkbox';
import MultiRangeSlider from './MultiRangeSlider';
import ProductCard from './ProductCard';

export default function MainCatalog({ }) {
  const filtersCategory = [
    {
      title: 'Категорії',
      body:
        <>
          <p>Якісь данні розділу Категорії</p>
        </>,
      status: false
    },
    {
      title: 'Ціна',
      body:
        <MultiRangeSlider
          min={900}
          max={40000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />,
      status: true
    },
    {
      title: 'Продавець',
      body:
        <>
          <p>Якісь данні розділу Продавець</p>
        </>,
      status: false
    },
    {
      title: 'Бренд',
      body:
        <>
          <p>Якісь данні розділу Бренд</p>
        </>,
      status: false
    },
    {
      title: 'Стать',
      body:
        <>
          <Checkbox
            key={Math.random() * 10}
            text='Жінкам'
            amount='(64)' />
          <Checkbox
            key={Math.random() * 10}
            text='Чоловікам'
            amount='(16)' />
          <Checkbox
            key={Math.random() * 10}
            text='Унісекс'
            amount='(24)' />
        </>,
      status: true
    },
    {
      title: 'Розмір',
      body:
        <>
          <p>Якісь данні розділу Розмір</p>
        </>,
      status: false
    },
    {
      title: 'Колір',
      body:
        <>
          <p>Якісь данні розділу Колір</p>
        </>,
      status: false
    },
    {
      title: 'Матеріал',
      body:
        <>
          <p>Якісь данні розділу Матеріал</p>
        </>,
      status: false
    },
    {
      title: 'Сезон',
      body:
        <>
          <p>Якісь данні розділу Сезон</p>
        </>,
      status: false
    },
    {
      title: 'Стиль',
      body:
        <>
          <p>Якісь данні розділу Стиль</p>
        </>,
      status: false
    },
  ]

  const productCard = [
    {
      image: mainProducts[0],
      organic: false,
      heart: main[6],
      top: true,
      brand: 'LOUIS VUITTON',
      title: 'Темно-сині джинси Louis Vuitton',
      priceOld: '5 499 ₴',
      priceNow: '3 799 ₴ ',
      locationIcon: main[1],
      locationText: 'Херсон',
      brandIcon: main[7],
      brandText: 'LoveBrand'
    },
    {
      image: mainProducts[1],
      organic: false,
      heart: main[6],
      top: true,
      brand: 'THOM BROWNE',
      title: 'Чорний піджак Thom Browne',
      priceOld: '11 999 ₴',
      priceNow: '8 599 ₴ ',
      locationIcon: main[1],
      locationText: 'Хмельницький',
      brandIcon: main[5],
      brandText: 'Sell_For_Men'
    },
    {
      image: mainProducts[2],
      organic: false,
      heart: main[6],
      top: false,
      brand: 'CANALI',
      title: 'Вовняний піджак Canali',
      priceOld: '4 999 ₴',
      priceNow: '2 599 ₴ ',
      locationIcon: main[1],
      locationText: 'Хмельницький',
      brandIcon: main[5],
      brandText: 'Sell_For_Men'
    },
    {
      image: mainProducts[3],
      organic: false,
      heart: main[6],
      top: false,
      brand: 'LOUIS VUITTON',
      title: 'Клатч Louis Vuitton Limelight',
      priceOld: '4 999 ₴',
      priceNow: '3 499 ₴ ',
      locationIcon: main[1],
      locationText: 'Дніпро',
      brandIcon: main[3],
      brandText: 'Brandear'
    },
    {
      image: mainProducts[4],
      organic: true,
      heart: main[6],
      top: false,
      brand: 'ELENA GHISELINI',
      title: 'Сумка з декором Elena Ghisellini',
      priceOld: '1 999 ₴',
      priceNow: '1 599 ₴ ',
      locationIcon: main[1],
      locationText: 'Дніпро',
      brandIcon: main[3],
      brandText: 'Brandear'
    },
    {
      image: mainProducts[5],
      organic: false,
      heart: main[6],
      top: false,
      brand: 'ACNE',
      title: 'Бомбер Acne на блискавці',
      priceOld: '5 999 ₴',
      priceNow: '4 199 ₴ ',
      locationIcon: main[1],
      locationText: 'Київ',
      brandIcon: main[2],
      brandText: 'Alexalex'
    },
    {
      image: mainProducts[6],
      organic: false,
      heart: main[6],
      top: false,
      brand: 'GUCCI',
      title: 'Довга сукня Gucci',
      priceOld: '11 999 ₴',
      priceNow: '8 599 ₴ ',
      locationIcon: main[1],
      locationText: 'Рівне',
      brandIcon: main[8],
      brandText: 'SellBuy'
    },
    {
      image: mainProducts[7],
      organic: false,
      heart: main[6],
      top: false,
      brand: 'CHANEL',
      title: 'Помаранчевий бомбер Woolrich',
      priceOld: '1 999 ₴',
      priceNow: '1 599 ₴ ',
      locationIcon: main[1],
      locationText: 'Кропивницький',
      brandIcon: main[4],
      brandText: 'Deeva_Sofia'
    },
    {
      image: mainProducts[8],
      organic: false,
      heart: main[6],
      top: false,
      brand: 'HACHE',
      title: 'Салатове пальто Hache',
      priceOld: '5 999 ₴',
      priceNow: '4 199 ₴ ',
      locationIcon: main[1],
      locationText: 'Київ',
      brandIcon: main[7],
      brandText: 'LoveBrand'
    },
  ]


  return (
    <section className='main__body'>
      <div className='body__filters'>
        {filtersCategory.map(item =>
          <Details
            key={Math.random() * 10}
            title={item.title}
            body={item.body}
            status={item.status}
          />
        )}
      </div>
      <div className='body__products'>
        {productCard.map(item =>
          <ProductCard key={Math.random() * 10} {...item} />
        )}

      </div>
    </section>
  )
}
