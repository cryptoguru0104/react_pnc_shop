import api from '../../utilities/api'
import { ActionTypes } from '../../utilities/enum'

export const fetchProducts = () => {
  const mockData: any = [
    {
      Id: 1,
      ImageUrl: '/assets/images/helmet.png',
      Title: 'Vineyard Vines White Whale Helmet T-Shirt',
      DeprecatedPrice: 38,
      Price: 15,
      Description: "This Green Bay Packers 2020 NFL Draft Official Draftee Low Profile 59FIFTY Fitted Hat features the team's logo in bright colored silicone on the front crown and the team's slogan embroidered in neon script on the right side.",
      Colors: ['#d8d8d8', '#111111', '#1f3731', '#ffb612'],
    },
    {
      Id: 2,
      ImageUrl: '/assets/images/helmet.png',
      Title: 'Fanatics Branded Cloth Face Covering',
      DeprecatedPrice: 38,
      Price: 15,
      Description: "This Green Bay Packers 2020 NFL Draft Official Draftee Low Profile 59FIFTY Fitted Hat features the team's logo in bright colored silicone on the front crown and the team's slogan embroidered in neon script on the right side.",
      Colors: ['#d8d8d8', '#111111', '#1f3731', '#ffb612'],
    },
    {
      Id: 3,
      ImageUrl: '/assets/images/helmet.png',
      Title: 'New Era Black 2020 NFL Draft Official',
      Price: 60,
      Description: "This Green Bay Packers 2020 NFL Draft Official Draftee Low Profile 59FIFTY Fitted Hat features the team's logo in bright colored silicone on the front crown and the team's slogan embroidered in neon script on the right side.",
      Colors: ['#d8d8d8', '#111111', '#1f3731', '#ffb612'],
    },
    {
      Id: 4,
      ImageUrl: '/assets/images/helmet.png',
      Title: 'Nike Sportswear Tech Long Sleeve',
      Price: 60,
      Description: "This Green Bay Packers 2020 NFL Draft Official Draftee Low Profile 59FIFTY Fitted Hat features the team's logo in bright colored silicone on the front crown and the team's slogan embroidered in neon script on the right side.",
      Colors: ['#d8d8d8', '#111111', '#1f3731', '#ffb612'],
    },
    {
      Id: 5,
      ImageUrl: '/assets/images/helmet.png',
      Title: 'New Era Black 2020 NFL Team Socks',
      Price: 10,
      Description: "This Green Bay Packers 2020 NFL Draft Official Draftee Low Profile 59FIFTY Fitted Hat features the team's logo in bright colored silicone on the front crown and the team's slogan embroidered in neon script on the right side.",
      Colors: ['#d8d8d8', '#111111', '#1f3731', '#ffb612'],
    },
    {
      Id: 6,
      ImageUrl: '/assets/images/helmet.png',
      Title: 'Nike Sportswear Tech Golf Polo',
      Price: 45,
      Description: "This Green Bay Packers 2020 NFL Draft Official Draftee Low Profile 59FIFTY Fitted Hat features the team's logo in bright colored silicone on the front crown and the team's slogan embroidered in neon script on the right side.",
      Colors: ['#d8d8d8', '#111111', '#1f3731', '#ffb612'],
    },
  ]

  return {
    type: ActionTypes.FETCH_PRODUCT,
    payload: mockData,
  }
}

// export const fetchProducts = () => (dispatch: any) => {
//   const EndPoint: string = `https://newsapi.org/v1/articles`
//   return api.get(EndPoint).then((res: any) => {
//     return {
//       type: ActionType,
//       payload: res.data,
//     }
//   }, (err: any) => {
//     console.log('An error occurred.', err)
//   })
// }

export const addCart = (id: number) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: id,
  }
}

export const removeCart = (id: number) => {
  return {
    type: ActionTypes.REMOVE_CART,
    payload: id,
  }
}

export const updateCartQuantity = (id: number, quantity: number) => {
  return {
    type: ActionTypes.UPDATE_CART_QUANTITY,
    payload: { id, quantity }
  }
}

export const addWishlist = (id: number) => {
  return {
    type: ActionTypes.ADD_WISHLIST,
    payload: id,
  }
}