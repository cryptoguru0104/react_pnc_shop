import PaymentMethodAdd from './PaymentMethodAdd'
import { connect } from 'react-redux'

import { methods } from '../../store/payment_method/reducer'

const mapStateToProps = (state: any) => ({
  value: methods(state),
})

export default connect(
  mapStateToProps
)(PaymentMethodAdd)
