import React from 'react';
import styles from './Steps.module.css';

const Steps = () => {
  return (
    <section className={styles.steps}>
      <div className={styles.step}>
        <div className={styles.number}>1</div>
        <h3>Зарегистрируйтесь</h3>
        <p>Пройдите быструю и простую регистрацию на нашей платформе.</p>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>2</div>
        <h3>Настройте параметры</h3>
        <p>Настройте платежные параметры в соответствии с потребностями.</p>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>3</div>
        <h3>Начните пользоваться!</h3>
        <p>Запустите ваш сайт и начните принимать платежи от клиентов.</p>
      </div>
    </section>
  );
};

export default Steps;
