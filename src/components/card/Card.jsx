import { useState } from 'react'
import { useMemo } from 'react'

import './card.scss'
import cat from '../../images/Photo.png'

import { v4 as uuidv4 } from 'uuid'

const Card = ({ card }) => {
  const [bought, setBought] = useState(false)
  const [hover, setHover] = useState(false)

  const handleBuyCard = () => {
    bought ? setBought(false) : setBought(true)
    setHover(false)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  const handleMouseEnter = () => {
    setHover(true)
  }

  return (
    <li className={card.disabled ? 'card card_disabled' : bought ? 'card card_bought' : 'card'}>
      <div
        className='card__container'
        onClick={handleBuyCard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='card__border'>
          <p className={bought && hover ? 'card__header card__header_hover' : 'card__header'}>
            {bought && hover ? 'Котэ не одобряет?' : card.title}
          </p>
          <h2 className='card__name'>{card.name}</h2>
          <p className='card__flavor'>{card.flavor}</p>
          <ul className='card__advantage-list'>
            {useMemo(
              () =>
                card.advantage.map((element) => (
                  <li className='card__advantage' key={uuidv4()}>
                    <span className='card__advantage card__advantage_bold'>{element[0]}</span>
                    {' ' + element[1]}
                  </li>
                )),
              [card],
            )}
          </ul>
          <img className='card__image' src={cat} alt='Кошка'></img>
        </div>
        <div className='card__weight'>
          <p className='card__weight-amount'>{card.weight}</p>
          <p className='card__weight-unit'>кг</p>
        </div>
      </div>
      {card.disabled ? (
        <p className='card__info card__info_disabled'>Печалька, {card.flavor} закончился.</p>
      ) : bought ? (
        <p className='card__info'>{card.selectedText}</p>
      ) : (
        <p className='card__info'>
          Чего сидишь? Порадуй котэ,{' '}
          <span className='card__info-link' onClick={handleBuyCard}>
            купи.
          </span>
        </p>
      )}
    </li>
  )
}

export default Card
