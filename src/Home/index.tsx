import Header from '../components/Header'
import Cards from '../components/Cards'

import { useGetRestaurantesQuery } from '../services/api'
import Loader from '../components/Loader'

const Home = () => {
  const { data: onRestaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return <Loader />
  }

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
