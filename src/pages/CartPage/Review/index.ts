import Review from './Review'
import { connect } from 'react-redux'

import { cartList } from '../../../store/product/reducer'

const mapStateToProps = (state: any) => ({
  cartList: cartList(state)
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(getChannel(ownProps.channelString))
//   },
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Review)
