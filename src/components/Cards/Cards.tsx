import React from 'react'
import styles from './cards.module.css'

type PropTypes = {
  img: string,
  children?: React.ReactElement,
}

/**
 * Теоретически, карточки бывают разные. Надо использовать тип и создавать компонент карточки под тип.
 * В нашем случае можно добавить проверку на картинку и показывать/не показывать блок с картинкой.
 */
const Cards = ( { img, children}: PropTypes ) => {
  return (
    <div className={styles["card"]}>
      {img && <img src={img} className={styles["card-img-top"]} alt='Картинка' />}
      <div className={styles["card-body"]}>
        {children}
      </div>
    </div>
  )
}

export default Cards