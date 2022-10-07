import React from 'react';
import '../style/footer.scss';
import GooglePlay from '../images/footer/google-play.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <class className='container footer__container'>
        <div className='footer__links'>
          <div className='links__wrapper'>
            <div className='footer__block'>
              <ul className='footer__list'>
                <li className='footer__item'>Довідка для покупців</li>
                <li className='footer__item'>Отримати підтримку</li>
                <li className='footer__item'>Як купувати</li>
                <li className='footer__item'>Як залишити корисний відгук</li>
                <li className='footer__item'>Програма Захисту Покупців</li>
                <li className='footer__item'>Рекомендації з безпечних покупок</li>
              </ul>
            </div>
            <div className='footer__block'>
              <ul className='footer__list'>
                <li className='footer__item'>Довідка для продавців</li>
                <li className='footer__item'>Як почати продавати</li>
                <li className='footer__item'>Тарифи</li>
                <li className='footer__item'>Угода користувача</li>
                <li className='footer__item'>Політика конфіденційності</li>
                <li className='footer__item'>Правила користування порталом</li>
                <li className='footer__item'>Бонусна програма</li>
              </ul>
            </div>
            <div className='footer__block'>
              <ul className='footer__list'>
                <li className='footer__item'>Про нас</li>
                <li className='footer__item'>Довідка та FAQ</li>
                <li className='footer__item'>Захист легальності контенту</li>
                <li className='footer__item'>Адміністрація</li>
                <li className='footer__item'>Вакансії</li>
              </ul>
            </div>
            <div className='footer__block'>
              <ul className='footer__list'>
                <li className='footer__item'>Мобільний додаток</li>
                <li className='footer__item'>
                  <img src={GooglePlay} alt='GooglePlay' />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__logo'>
          <p>© 2022 Monvalise</p>
        </div>
      </class>
    </footer>
  )
}
