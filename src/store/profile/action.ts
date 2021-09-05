import api from '../../utilities/api'
import { getToken } from '../../utilities/storage'
import { ActionTypes } from '../../utilities/enum'

// export const getAuthByToken = () => {
//   const token = getToken()
//   const mockData = token ? {
//     Id: 1
//   } : null

//   let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() {
//       myResolve("I love You !!"); }, 3000);
//   });

//   return {
//     type: ActionTypes.GET_USER_BY_TOKEN,
//     payload: mockData,
//   }
// }

export const getAuthByToken = () => (dispatch: any) => {
  const token = getToken()
  const mockData = token
    ? {
        Id: 1,
      }
    : null

  dispatch({
    type: ActionTypes.SET_PROFILE_LOADING,
    payload: true,
  })

  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
      myResolve('I love You !!')
    }, 3000)
  })

  return myPromise.then((res: any) => {
    dispatch({
      type: ActionTypes.SET_PROFILE_LOADING,
      payload: false,
    })

    return {
      type: ActionTypes.GET_USER_BY_TOKEN,
      payload: mockData,
    }
  })
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
