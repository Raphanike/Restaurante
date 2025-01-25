import Header from '../components/Header'
import Cards from '../components/Cards'

import { useGetRestaurantesQuery } from '../services/api'

const Home = () => {
  const { data: onRestaurantes, isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <Header />
      <Cards
        id="on-restaurantes"
        restaurants={onRestaurantes}
        isLoading={isLoading}
      />
    </>
  )
}

export default Home
