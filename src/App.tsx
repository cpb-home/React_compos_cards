import './App.css'
import Card from './components/Cards/Cards'
import CardInterface from './models/CardInterface';
import styles from './components/Cards/cards.module.css'


function App() {

  const cardsInfo: CardInterface[] = [
    {
      title: 'Карточка 1',
      text: 'Описание карточки 1 в несколько не очень длинных строк. Карточка с картинкой',
      img: 'https://img.freepik.com/premium-photo/cute-furry-cats-indoors_862994-143001.jpg',
      link: 'http://www.ya.ru'
    },
    {
      title: 'Карточка 2',
      text: 'Описание карточки 2 другими словами, чем в карточке 1. Ну а что, так тоже можно!',
      img: '',
      link: 'http://www.vk.com'
    },
    {
      title: 'Ещё карточка',
      text: 'Крупным планом котенок гуляет по дому, и забот не знает. Не то что мы - изучаем реакт!',
      img: 'https://img.freepik.com/free-photo/close-up-on-kitten-walking-indoors_23-2150782343.jpg?w=1380&t=st=1713024066~exp=1713024666~hmac=ab39906635f9c1373aa4d03c13d5feb321d1d869a7e9ea523d158f8efc23a7e6',
      link: 'http://www.ok.ru'
    }
  ];

  return (
    <div className='container'>
      {cardsInfo.map((el, ind) => 
        <Card key={ind} img={el.img}>
          <>
            <h5 className={styles["card-title"]}>{el.title}</h5>
            <p className={styles["card-text"]}>{el.text}</p>
            <a href="{el.link}" className={styles["btn"]}>Перейти</a>
          </>
        </Card>)}
    </div>
  )
}

export default App
