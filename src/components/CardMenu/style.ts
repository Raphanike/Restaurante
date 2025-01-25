import styled from 'styled-components'
import { Breakpoints, Cores } from '../../GlobalStyles'
import { ButtonSubmit } from '../Button/style'

export const CardContainer = styled.div`
  background-color: ${Cores.salmao};
  height: 100%;
  max-width: 320px;
  width: 100%;
  color: ${Cores.salmaoClaro};
  display: flex;
  flex-direction: column;

  .container {
    padding: 0 8px;
  }

  ${ButtonSubmit} {
    background-color: ${Cores.salmaoClaro};
    color: ${Cores.salmao};

    line-height: 16px;
    font-size: 14px;
    justify-content: center;
    width: 100%;
    margin-bottom: 8px;
  }
`

export const LerMais = styled.button`
  background-color: ${Cores.salmao};
  color: ${Cores.salmaoClaro};
  border: none;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  padding: 8px;
  height: 167px;
`

export const Title = styled.h3`
  padding: 0 8px;
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
`

export const Description = styled.p`
  font-size: 14px;
  padding: 8px;
  font-weight: 400;
  line-height: 22px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;


  }

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 344px;
  position: relative;
  background-color: ${Cores.salmao};
  color: ${Cores.branco};
  display: flex;
  z-index: 1;
  padding: 32px;

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
    height: auto;
    width: 90%;
  }

  .smallImage {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  .bigImage {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  ${ButtonSubmit} {
    background-color: ${Cores.salmaoClaro};
    color: ${Cores.salmao};

    line-height: 16px;
    font-size: 14px;
    margin-top: 16px;
    width: max-content;
  }
`
