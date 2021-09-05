import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../../components/PageTitle'
import ProductCard from '../../components/ProductCard'
import SideBar from '../../components/SideBar'

import './WishlistPage.scoped.scss'

import { fetchProducts } from '../../store/product/action'

const WishlistPage = (props: any) => {
  // const products: any[] = props.products
  const { products, dispatch } = props

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="shop-page">
      <header>
        <PageTitle title="Wish list" canReturn={true} />
      </header>
      <div className="page-body">
        <div className="product-container">
          { products.slice(0, 3).map((iData: any) => (
            <ProductCard data={iData} key={iData.Id} canRemove={true} />
          )) }
        </div>
      </div>
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
    </div>
  )
}

WishlistPage.propTypes = {
  products: PropTypes.array
}

export default WishlistPage
