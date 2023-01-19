import './catFood.scss'
import { cards } from '../../utils/cards'
import Card from '../card/Card'

const CatFood = () => {
  return (
    <section className='cat-food'>
      <h2 className='cat-food__title font-exo'>Ты сегодня покормил кота?</h2>
      <ul className='cat-food__cards-container'>
        {cards.map((element) => (
          <Card card={element} key={element.id}></Card>
        ))}
      </ul>
    </section>
  )
}

export default CatFood
