import Card from '../Card'
import { Body, Container } from './style'

import { useLocation } from 'react-router-dom'
import CardMenu from '../CardMenu'
import Loader from '../Loader'

export type Props = {
  restaurants?: Restaurant[]
  menus?: Menu[]
  id?: string
  isLoading: boolean
}

const Cards = ({ restaurants = [], menus = [], id, isLoading }: Props) => {
  const location = useLocation()

  if (isLoading) {
    return <Loader />
  }

  return (
    <Body>
      <Container id={id} isHome={location.pathname === '/'}>
        {location.pathname === '/' && restaurants
          ? restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                title={restaurant.titulo}
                description={restaurant.descricao}
                assessment={restaurant.avaliacao}
                cover={restaurant.capa}
                typeFood={restaurant.tipo}
                highlights={restaurant.destacado}
                id={restaurant.id}
              />
            ))
          : menus?.length
          ? menus.map((menu: Menu) => (
              <li key={menu.id}>
                <CardMenu items={menu} />
              </li>
            ))
          : null}
      </Container>
    </Body>
  )
}

export default Cards
