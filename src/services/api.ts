import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (build) => ({
    getRestaurantes: build.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: build.query<{ cardapio: Menu[] } & Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: build.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: `checkout`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestaurantesQuery, useGetMenuQuery, usePurchaseMutation } =
  api

export default api
