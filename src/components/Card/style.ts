import styled from 'styled-components'

import { Cores } from '../../GlobalStyles'
import { ButtonLink } from '../Button/style'

interface ImageProps {
  Image: string
}

export const ContainerCard = styled.div`
  max-width: 472px;

  .container {
    padding: 0 8px 8px;
  }

  ${ButtonLink} {
    width: 82px;
  }
`

export const Imagem = styled.div<ImageProps>`
  width: 100%;
  height: 217px;
  background-image: url(${(props) => props.Image});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  }
`

export const DescricaoCard = styled.div`
  background-color: ${Cores.branco};
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e66767;
  color: ${Cores.salmao};
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 8px 0 8px;
  align-items: center;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
  }
`

export const Paragrafo = styled.p`
  padding: 16px 8px;
  font-size: 14px;

  font-weight: 400px;
`
