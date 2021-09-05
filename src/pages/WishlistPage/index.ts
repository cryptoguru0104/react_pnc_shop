import WishlistPage from './WishlistPage'
import { connect } from 'react-redux'

import { products } from '../../store/product/reducer'

const mapStateToProps = (state: any) => ({
  products: products(state)
})
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(getChannel(ownProps.channelString))
//   },
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(WishlistPage)
