import Shipping from './Shipping'
import { connect } from 'react-redux'

import { cartList } from '../../../store/product/reducer'
import { methods, allMethods } from '../../../store/payment_method/reducer'

const mapStateToProps = (state: any) => ({
  cartList: cartList(state),
  paymentMethods: methods(state),
  allPaymentMethods: allMethods(state)
})

export default connect(
  mapStateToProps
)(Shipping)
