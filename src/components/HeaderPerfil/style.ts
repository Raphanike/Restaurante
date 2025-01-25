import styled from 'styled-components'
import bannerHome from '../../assets/images/Vector.svg'
import { Breakpoints, Cores } from '../../GlobalStyles'

export const PerfilHeader = styled.header`
  background-image: url(${bannerHome});
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Cores.salmao};

  @media (max-width: ${Breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${Breakpoints.desktop}) {
      max-width: 80%;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      display: block;
      width: auto;

      img {
        margin-bottom: 8px;
        margin-top: 8px;
      }
    }
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`
