import SideBar from './SideBar'
import { connect } from 'react-redux'

import { getCartCount } from '../../store/product/reducer'

const mapStateToProps = (state: any) => ({
  cartCount: getCartCount(state)
})

export default connect(
  mapStateToProps,
)(SideBar)
