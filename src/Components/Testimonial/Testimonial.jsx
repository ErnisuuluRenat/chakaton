import React from 'react';
import styles from './Testimonial.module.css';

const testimonials = [
  {
    name: 'Алексей Смирнов',
    text: 'Невероятно! Не могу поверить, что настройка нашего интернет-магазина заняла всего несколько минут. Все было просто и понятно.',
  },
  {
    name: 'Михаил Иванов',
    text: 'Это лучший сервис для приема онлайн-платежей. Подходит как для начинающих, так и для опытных пользователей, стремящихся к успеху.',
  },
  {
    name: 'Ирина Петрова',
    text: 'Обязательный инструмент для любого бизнеса, который хочет принимать платежи онлайн быстро и безопасно.',
  },
];

const Testimonial = () => {
  return (
    <section className={styles.testimonials}>
      <h2>+1,749 команд поделились своим опытом использования нашего сервиса!</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.testimonial}>
          <p className={styles.text}>{testimonial.text}</p>
          <p className={styles.name}>{testimonial.name}</p>
        </div>
      ))}
      <a href="#all-reviews" className={styles.allReviews}>Все отзывы</a>
    </section>
  );
};

export default Testimonial;
