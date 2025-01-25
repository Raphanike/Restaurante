import styled from 'styled-components'
import { Cores } from '../../GlobalStyles'
import { ButtonLink, ButtonSubmit } from '../Button/style'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${Cores.salmao};
  z-index: 1;
  padding: 32px 8px;

  ${ButtonSubmit} {
    background-color: ${Cores.salmaoClaro};
    color: ${Cores.salmao};
    line-height: 16px;
    font-size: 14px;
    justify-content: center;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${Cores.salmaoClaro};
    text-align: center;
  }

  ${ButtonLink} {
    background-color: ${Cores.salmaoClaro};
    color: ${Cores.salmao};
    line-height: 16px;
    font-size: 14px;
    justify-content: center;
    width: 100%;
  }
`

export const CartItem = styled.div`
  background-color: ${Cores.salmaoClaro};
  color: ${Cores.salmao};
  display: flex;
  padding: 8px 0 12px 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h4 {
    line-height: 21px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
  }

  .smallImage {
    height: 16px;
    width: 16px;
    bottom: 8px;
    right: 8px;
    position: absolute;
    cursor: pointer;
  }
`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 16px;
  color: ${Cores.salmaoClaro};
  line-height: 16px;
  font-size: 14px;
  font-weight: 700;
`
export const CheckDelivery = styled.div`
  color: ${Cores.salmaoClaro};
  display: block;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .display-Numbers {
    display: flex;
    gap: 34px;
  }

  .buttons {
    margin-top: 16px;

    button {
      margin-bottom: 8px;
    }
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
  }

  input {
    width: ${(props) => props.maxWidth || '100%'};
    padding: 8px;
    background-color: ${Cores.salmaoClaro};
    color: ${Cores.black};
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    border: none;
    margin-bottom: 8px;

    &.error1 {
      border: 2px solid red;
    }

    &.error2 {
      border: 2px solid red;
    }
  }
`
