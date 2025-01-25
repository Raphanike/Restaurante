import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../GlobalStyles'

export const ButtonLink = styled(Link)`
  background-color: ${Cores.salmao};
  color: ${Cores.salmaoClaro};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
`

export const ButtonSubmit = styled.button`
  background-color: ${Cores.salmao};
  color: ${Cores.salmaoClaro};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
`
