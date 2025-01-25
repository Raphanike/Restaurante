import { ButtonLink, ButtonSubmit } from './style'

type Props = {
  to?: string
  children: string
  type: 'button' | 'link' | 'submit'
  onClick?: () => void
}

const Button = ({ to, children, type, onClick }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonSubmit type={type} onClick={onClick}>
        {children}
      </ButtonSubmit>
    )
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
