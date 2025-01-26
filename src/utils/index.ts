export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPreco = (items: Menu[]) => {
  return items.reduce((acumulador, valorAtual) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return (acumulador += valorAtual.preco!)
  }, 0)
}
