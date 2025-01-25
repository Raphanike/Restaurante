import styled from 'styled-components'
import bannerHome from '../../assets/images/Vector.svg'
import { Cores } from '../../GlobalStyles'

export const HeaderHome = styled.header`
  background-image: url(${bannerHome});
  background-repeat: no-repeat;
  background-size: cover;
  height: 384px;
  color: ${Cores.salmao};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 125px;
    height: 57.5px;
  }

  h1 {
    padding-top: 138px;
    font-size: 36px;
    line-height: 42px;
    max-width: 539px;
    text-align: center;
    font-weight: bold;
  }
`
