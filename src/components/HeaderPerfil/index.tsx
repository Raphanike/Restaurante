import logo from '../../assets/images/logo.svg'
import Button from '../Button'
import { LinkCart, PerfilHeader } from './style'

import cart from '../../assets/images/shopping-cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../store/reducers/cart'
import { RootReducer } from '../store'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <PerfilHeader>
      <div className="container">
        <Button type="link" to="/">
          Restaurantes
        </Button>
        <img src={logo} alt="logo" />
        <LinkCart onClick={openCart}>
          {items.length} - produto(s)
          <img src={cart} alt="carrinho" />
        </LinkCart>
      </div>
    </PerfilHeader>
  )
}

export default HeaderPerfil
