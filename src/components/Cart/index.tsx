import Button from '../Button'
import {
  CartContainer,
  CartItem,
  CheckDelivery,
  InputGroup,
  Overlay,
  SideBar,
  ValorTotal
} from './style'

import cancel from '../../assets/images/lixeira.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import {
  clear,
  close,
  nextStep,
  prevStep,
  remove,
  setStep
} from '../store/reducers/cart'
import { formataPreco, getTotalPreco } from '../../utils'

import { ButtonLink, ButtonSubmit } from '../Button/style'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Cart = () => {
  const { isOpen, items, step } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      streetAddress: '',
      cityAddress: '',
      cep: '',
      tel: '',
      complement: '',
      fullNameCard: '',
      numberCard: '',
      codeCard: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'minimo 5 caracteres')
        .required('campo obrigatório!'),
      streetAddress: Yup.string()
        .min(5, 'Endereço inválido')
        .required('campo obrigatório!'),
      cityAddress: Yup.string()
        .min(3, 'Endereço inválido')
        .required('campo obrigatório!'),
      cep: Yup.string()
        .min(5, 'cep incorreto')
        .max(12, 'cep incorreto')
        .required('campo obrigatório!'),
      tel: Yup.string()
        .min(5, 'Telefone incompleto')
        .required('campo obrigatório!'),
      complement: Yup.string().min(5, 'minimo 5 caracteres'),
      fullNameCard: Yup.string()
        .min(5, 'minimo 5 caracteres')
        .required('campo obrigatório!'),
      numberCard: Yup.string()
        .min(5, 'minimo 5 caracteres')
        .required('campo obrigatório!'),
      codeCard: Yup.string()
        .min(3, 'código invalido')
        .max(3, 'código invalido')
        .required('campo obrigatório!'),
      expiresMonth: Yup.string()
        .min(2, 'minimo 2 caracteres')
        .max(2, 'minimo 2 caracteres')
        .required('campo obrigatório!'),
      expiresYear: Yup.string()
        .min(2, 'minimo  caracteres')
        .max(2, 'minimo 2 caracteres')
        .required('campo obrigatório!')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.streetAddress,
            city: values.cityAddress,
            zipCode: values.cep,
            number: Number(values.tel),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.fullNameCard,
            number: values.numberCard,
            code: Number(values.codeCard),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const getError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const validateStep = async (fields: string[]) => {
    const errors = await form.validateForm()

    form.setTouched(
      fields.reduce((acc, field) => ({ ...acc, [field]: true }), {}),
      true
    )

    const hasErrors = fields.some(
      (field) => errors[field as keyof typeof form.errors]
    )

    return hasErrors
  }

  const finalizeOrder = () => {
    return (
      dispatch(setStep(1)),
      dispatch(clear()),
      dispatch(close()),
      form.resetForm()
    )
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={CloseCart} />
        <SideBar>
          {items.length > 0 ? (
            <>
              {step === 1 && (
                <>
                  <ul>
                    {items.map((item) => (
                      <CartItem key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                          <h4>{item.nome}</h4>
                          <p>{formataPreco(item.preco)}</p>
                        </div>
                        <img
                          onClick={() => removeItem(item.id)}
                          className="smallImage"
                          src={cancel}
                          alt="close"
                        />
                      </CartItem>
                    ))}
                  </ul>
                  <ValorTotal>
                    <p>Valor total</p>
                    <p>{formataPreco(getTotalPreco(items))}</p>
                  </ValorTotal>
                  <Button onClick={() => dispatch(nextStep())} type="button">
                    Continuar com a entrega
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  <CheckDelivery>
                    <h3>Entrega</h3>
                    <InputGroup>
                      <label htmlFor="fullName">Quem irá receber</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('fullName') ? 'error1' : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="streetAddress">Endereço</label>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={form.values.streetAddress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('streetAddress') ? 'error1' : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cityAddress">Cidade</label>
                      <input
                        type="text"
                        id="cityAddress"
                        name="cityAddress"
                        value={form.values.cityAddress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('cityAddress') ? 'error1' : ''}
                      />
                    </InputGroup>
                    <div className="display-Numbers">
                      <InputGroup>
                        <label htmlFor="cep">CEP</label>
                        <input
                          type="number"
                          id="cep"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('cep') ? 'error1' : ''}
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="tel">Número</label>
                        <input
                          type="tel"
                          id="tel"
                          name="tel"
                          value={form.values.tel}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('tel') ? 'error1' : ''}
                        />
                      </InputGroup>
                    </div>
                    <InputGroup>
                      <label htmlFor="complement">
                        Complemento (opicional)
                      </label>
                      <input
                        type="text"
                        id="complement"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </InputGroup>

                    <div className="buttons">
                      <ButtonSubmit
                        onClick={async () => {
                          const isValidStep2 = await validateStep([
                            'fullName',
                            'streetAddress',
                            'cityAddress',
                            'cep',
                            'tel'
                          ])

                          if (!isValidStep2) {
                            dispatch(nextStep())
                          } else {
                            alert(
                              'Por favor, corrija os erros antes de continuar.'
                            )
                          }
                        }}
                        type="submit"
                      >
                        Continuar com o pagamento
                      </ButtonSubmit>
                      <ButtonSubmit
                        onClick={() => dispatch(prevStep())}
                        type="button"
                      >
                        Voltar para o carrinho
                      </ButtonSubmit>
                    </div>
                  </CheckDelivery>
                </>
              )}

              {step === 3 && (
                <>
                  <CheckDelivery>
                    <h3>
                      Pagamento - Valor a pagar R${' '}
                      {formataPreco(getTotalPreco(items))}
                    </h3>
                    <InputGroup>
                      <label htmlFor="fullNameCard">Nome no cartão</label>
                      <input
                        type="text"
                        id="fullNameCard"
                        name="fullNameCard"
                        value={form.values.fullNameCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={getError('fullNameCard') ? 'error2' : ''}
                      />
                    </InputGroup>
                    <div className="display-Numbers">
                      <InputGroup maxWidth="228px">
                        <label htmlFor="numberCard">Número do cartão</label>
                        <input
                          type="number"
                          id="numberCard"
                          name="numberCard"
                          value={form.values.numberCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('numberCard') ? 'error2' : ''}
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="codeCard">CVV</label>
                        <input
                          type="number"
                          id="codeCard"
                          name="codeCard"
                          value={form.values.codeCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('codeCard') ? 'error2' : ''}
                        />
                      </InputGroup>
                    </div>
                    <div className="display-Numbers">
                      <InputGroup>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input
                          type="number"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('expiresMonth') ? 'error2' : ''}
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          type="number"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={getError('expiresYear') ? 'error2' : ''}
                        />
                      </InputGroup>
                    </div>
                    <div className="buttons">
                      <ButtonSubmit
                        onClick={async () => {
                          const isValidStep3 = await validateStep([
                            'fullNameCard',
                            'numberCard',
                            'codeCard',
                            'expiresMonth',
                            'expiresYear'
                          ])

                          if (!isValidStep3) {
                            dispatch(nextStep()), form.handleSubmit()
                          } else {
                            alert(
                              'Por favor, corrija os erros antes de Finalizar pagamento.'
                            )
                          }
                        }}
                        type="submit"
                      >
                        Finalizar pagamento
                      </ButtonSubmit>
                      <ButtonSubmit
                        onClick={() => dispatch(prevStep())}
                        type="button"
                      >
                        Voltar para a edição de endereço
                      </ButtonSubmit>
                    </div>
                  </CheckDelivery>
                </>
              )}

              {step === 4 && (
                <>
                  <CheckDelivery>
                    <h3>Pedido realizado - {data?.orderId}</h3>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <p>
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                    </p>
                    <p>
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <p>
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>
                    <div className="buttons">
                      <ButtonLink to={'/'} onClick={finalizeOrder}>
                        Concluir
                      </ButtonLink>
                    </div>
                  </CheckDelivery>
                </>
              )}
            </>
          ) : (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          )}
        </SideBar>
      </CartContainer>
    </form>
  )
}

export default Cart
