declare type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  descricao: string
  avaliacao: string
  capa: string
  tipo: string
  destacado: boolean
  cardapio: Menu[]
}
