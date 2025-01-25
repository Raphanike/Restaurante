import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram-icon.svg'
import facebook from '../../assets/images/Facebook-icon.svg'
import twiter from '../../assets/images/Twiter-icon.svg'
import { FooterStyle, Redes } from './style'

const Footer = () => (
  <FooterStyle>
    <img src={logo} alt="logo" />
    <Redes>
      <img src={instagram} alt="instagram" />
      <img className="facebook" src={facebook} alt="facebook" />
      <img src={twiter} alt="twiter" />
    </Redes>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </FooterStyle>
)

export default Footer
