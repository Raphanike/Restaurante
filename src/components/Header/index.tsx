import logo from '../../assets/images/logo.svg'

import { HeaderHome } from './style'

const Header = () => (
  <HeaderHome>
    <img src={logo} alt="logo" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </HeaderHome>
)

export default Header
