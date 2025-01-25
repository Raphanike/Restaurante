import { useState } from 'react'
import star from '../../assets/images/star.svg'
import Button from '../Button'
import { LerMais } from '../CardMenu/style'
import Tag from '../Tag'

import {
  ContainerCard,
  DescricaoCard,
  HeaderCard,
  Imagem,
  Nota,
  Paragrafo
} from './style'
import { Cores } from '../../GlobalStyles'

type Props = {
  title: string
  typeFood: string
  assessment: string
  description: string
  cover: string
  highlights: boolean
  id: number
}

const Card = ({
  title,
  typeFood,
  assessment,
  description,
  cover,
  highlights,
  id
}: Props) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)

  const toggleDescription = () => {
    setDescriptionExpanded(!descriptionExpanded)
  }

  const getDescription = () => {
    if (!descriptionExpanded && description.length > 243) {
      return (
        <>
          {description.slice(0, 243)}...{''}
          <LerMais
            style={{ background: Cores.branco, color: Cores.salmao }}
            type="button"
            onClick={toggleDescription}
          >
            Ler mais
          </LerMais>
        </>
      )
    }
    return (
      <>
        {description}
        {''}
        {descriptionExpanded && (
          <LerMais
            style={{ background: Cores.branco, color: Cores.salmao }}
            type="button"
            onClick={toggleDescription}
          >
            Ler menos
          </LerMais>
        )}
      </>
    )
  }

  return (
    <ContainerCard>
      <Imagem Image={cover}>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            position: 'absolute',
            top: '16px',
            right: '16px'
          }}
        >
          {highlights === true ? <Tag>Destaque da semana</Tag> : null}
          <Tag>{typeFood}</Tag>
        </div>
      </Imagem>
      <DescricaoCard>
        <HeaderCard>
          <h3>{title}</h3>
          <Nota>
            <p>{assessment}</p>
            <img src={star} alt="star" />
          </Nota>
        </HeaderCard>
        <Paragrafo>{getDescription()}</Paragrafo>
        <div className="container">
          <Button type="link" to={`/Perfil/${id}`}>
            Saiba mais
          </Button>
        </div>
      </DescricaoCard>
    </ContainerCard>
  )
}

export default Card
