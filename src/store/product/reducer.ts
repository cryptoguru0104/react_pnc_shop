import { ActionTypes } from '../../utilities/enum'

const initialState = {
  loading: false,
  products: [] as Product[],
  wishList: [] as Product[],
  cartList: [] as Product[]
}

export const product = (state = initialState, action: any) => {
  console.log(action)
  const { type, payload } = action
  switch (type) {
    case ActionTypes.FETCH_PRODUCT: {
      return {
        ...state,
        products: payload,
      }
    }

    case ActionTypes.ADD_CART: {
      const payloadId: number = Number(payload)
      const cartList = [...state.cartList]
      const i = cartList.findIndex((e: any) => e?.Id === payloadId)
      if (i !== -1) {
        cartList[i].Quantity += 1
      } else {
        const product = state.products.find((e: any) => e?.Id === payloadId)
        if (!product) {
          return state
        }
        product.Quantity = 1
        cartList.push(product)
      }

      return {
        ...state,
        cartList: cartList,
      }
    }

    case ActionTypes.REMOVE_CART: {
      const id: number = Number(payload)
      const cartList = [...state.cartList]
      const i = cartList.findIndex((e: any) => e?.Id === id)
      if (i !== -1) {
        cartList.splice(i, 1)
      } else {
        console.log("undefined cartId:", id)
      }

      return {
        ...state,
        cartList: cartList,
      }
    }

    case ActionTypes.UPDATE_CART_QUANTITY: {
      const { id, quantity }: { id: number, quantity: number } = payload
      const cartList = [...state.cartList]
      const i = cartList.findIndex((e: any) => e?.Id === id)
      if (i !== -1) {
        cartList[i].Quantity = quantity
      } else {
        console.log("undefined cartId:", id)
      }

      return {
        ...state,
        cartList: cartList,
      }
    }

    case ActionTypes.ADD_WISHLIST: {
      const payloadId: number = Number(payload)
      const wishList = [...state.wishList]
      const i = wishList.findIndex((e: any) => e.Id === payloadId)
      if (i !== -1) {
        wishList[i].Quantity += 1
      } else {
        const product = state.products.find((e: any) => e.Id === payloadId)
        if (!product) {
          return state
        }
        product.Quantity = 1
        wishList.push(product)
      }

      return {
        ...state,
        wishList: wishList,
      }
    }


    default:
      return state
  }
}

export const loading = (state: any): boolean => state.product.loading

export const products = (state: any): Product[] => state.product.products

export const cartList = (state: any): Product[] => state.product.cartList

export const wishList = (state: any): Product[] => state.product.wishList

export const getCartCount = (state: any): number => {
  let sum = 0
  state.product.cartList.forEach((e: any) => {
    sum += e.Quantity
  })
  return sum
}