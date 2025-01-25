import Button from '../Button'
import {
  CardContainer,
  Description,
  Image,
  LerMais,
  Modal,
  ModalContent,
  Title
} from './style'

import close from '../../assets/images/close.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../store/reducers/cart'

import { formataPreco } from '../../utils'

type Props = {
  items: Menu
}

const CardMenu = ({ items }: Props) => {
  const [modal, setModal] = useState({ isVisible: false })
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)

  const toggleDescription = () => {
    setDescriptionExpanded(!descriptionExpanded)
  }

  const getDescription = () => {
    if (!descriptionExpanded && items.descricao.length > 243) {
      return (
        <>
          {items.descricao.slice(0, 243)}...{''}
          <LerMais type="button" onClick={toggleDescription}>
            Ler mais
          </LerMais>
        </>
      )
    }
    return (
      <>
        {items.descricao}
        {''}
        {descriptionExpanded && (
          <LerMais type="button" onClick={toggleDescription}>
            Ler menos
          </LerMais>
        )}
      </>
    )
  }

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(open())
    dispatch(add(items))
  }

  return (
    <>
      <CardContainer>
        <Image src={items.foto} alt={items.nome} />
        <Title>{items.nome}</Title>
        <Description>{getDescription()}</Description>
        <div className="container">
          <Button type="button" onClick={() => setModal({ isVisible: true })}>
            Adicionar ao carrinho
          </Button>
        </div>
      </CardContainer>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <img
            className="smallImage"
            src={close}
            alt="close"
            onClick={() => setModal({ isVisible: false })}
          />
          <div>
            <img className="bigImage" src={items.foto} alt={items.nome} />
          </div>
          <div>
            <h3>{items.nome}</h3>
            <p>{items.descricao}</p> <br />
            <p>{items.porcao}</p>
            <Button type="button" onClick={addCart}>
              {`Adicionar ao carrinho - ${formataPreco(items.preco)}`}
            </Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ isVisible: false })}
        ></div>
      </Modal>
    </>
  )
}

export default CardMenu
