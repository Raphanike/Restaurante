import styled from 'styled-components'
import { Breakpoints, Cores } from '../../GlobalStyles'

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${Cores.salmaoClaro};
  color: ${Cores.salmao};
  padding: 40px 0;

  p {
    font-size: 10px;
    max-width: 480px;
    text-align: center;

    @media (max-width: ${Breakpoints.tablet}) {
      width: 90%;
    }
  }
`

export const Redes = styled.div`
  padding: 32px 0 80px 0;

  .facebook {
    padding: 0 8px;
  }
`
