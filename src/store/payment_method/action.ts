import api from '../../utilities/api'
import { ActionTypes } from '../../utilities/enum'

export const addPaymentMethod = (method: PaymentMethod) => {
  return {
    type: ActionTypes.ADD_PAYMENT_METHOD,
    payload: method
  }
}