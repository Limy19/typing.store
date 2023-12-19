import React from 'react';

function About(): JSX.Element {
  return (
    <div className="about">
      <div
        className="img"
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '25px',
        }}
      >
        <img
          style={{ width: '85%', height: '45%', position: 'static', marginBottom: '10px' }}
          alt="pupupu"
          src="https://thekey.company/cdn/shop/files/12.4Switches-7_1024x1024.jpg?v=1701724148"
        />
        <img
          style={{ width: '85%', height: '45%', position: 'static', marginBottom: '10px' }}
          alt="pupupu"
          src="https://thekey.company/cdn/shop/files/NewKeyboards10.12-5_1024x1024.jpg?v=1697473503"
        />
      </div>
      <div className="textabout" style={{ width: '50%' }}>
        <h1
          style={{
            color: '#121214',
            fontSize: '62px',
            marginBottom: '-75px',
            fontFamily: 'IBM Plex Mono',
          }}
        >
          NEW WAYS OF
        </h1>
        <h1 style={{ color: '#ffa800', fontSize: '62px', fontFamily: 'IBM Plex Mono' }}>
          TYPING TEXTS
        </h1>
        <p style={{ color: '#121214', fontSize: '18px', fontFamily: 'IBM Plex Mono' }}>
          Наш магазин предлагает широкий выбор кастомных клавиатур для любителей гейминга и
          профессиональных пользователей. У нас вы можете приобрести как отдельные детали для сборки
          собственной клавиатуры, так и полностью готовые модели от лучших производителей.
          Уникальность нашего магазина заключается в том, что мы предлагаем конструктор клавиатур,
          который позволяет нашим клиентам собрать уникальную клавиатуру, учитывая все их
          предпочтения. Вы можете выбрать тип клавиш, их цвет, материал корпуса, подсветку и многое
          другое.
          <br />
          <br />
          Мы предлагаем бесплатную консультацию по сборке клавиатуры и гарантируем высокое качество
          каждой детали. На нашем сайте также доступна проверка скорости печатания, чтобы вы могли
          оценить свои навыки и сравнить их с другими пользователями. Мы также предлагаем широкий
          выбор аксессуаров для клавиатур, таких как подставки, кейкапы, провода и многое другое. Мы
          гарантируем быструю доставку и отличное обслуживание нашим клиентам. Посетите наш сайт и
          создайте свою идеальную клавиатуру прямо сейчас!
        </p>
      </div>
    </div>
  );
}

export default About;
