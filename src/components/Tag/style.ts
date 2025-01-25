import styled from 'styled-components'
import { Cores } from '../../GlobalStyles'

import { Props } from '.'

export const TagCategoria = styled.span<Props>`
  background-color: ${Cores.salmao};
  color: ${Cores.salmaoClaro};
  font-size: 12px;
  align-items: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 6px 4px;
`
