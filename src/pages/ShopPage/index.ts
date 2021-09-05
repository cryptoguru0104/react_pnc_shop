import ShopPage from './ShopPage'
import { connect } from 'react-redux'

import { products } from '../../store/product/reducer'

const mapStateToProps = (state: any) => ({
  products: products(state)
})

export default connect(
  mapStateToProps,
)(ShopPage)
