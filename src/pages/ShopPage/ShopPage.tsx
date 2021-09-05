import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../../components/PageTitle'
import NavBar from '../../components/NavBar'
import TopMenu from '../../components/TopMenu'
import ProductCard from '../../components/ProductCard'
import ImageCard from '../../components/ImageCard'
import SideBar from '../../components/SideBar'
import ScrollToTop from '../../components/ScrollToTop'
import { useLocation } from 'react-router-dom'

import './ShopPage.scoped.scss'

import { fetchProducts } from '../../store/product/action'


interface PropsType {
  products: Product[],
  dispatch(action: any): Promise<any>
}

const ShopPage = (props: any) => {
  // const products: any[] = props.products
  const { products, dispatch } = props as PropsType
  const search = useLocation().search;
  const filter = new URLSearchParams(search).get('filter');
  const [searchKeyword, setSearchKeyword] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products || [])

  const thumbData = {
    ImageUrl: '/assets/images/shop.jpg',
    Title: 'Packers Pro Shop'
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    setFilteredProducts(products.filter(
      (e: Product) => ((!searchKeyword || e?.Title.indexOf(searchKeyword) !== -1)))
    )
  }, [products, filter, searchKeyword])

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  return (
    <div className="shop-page page">
      <header>
        <PageTitle title="Shop" />
        <div className="page-menu-container">
          <NavBar onSearch={handleSearch} />
          <TopMenu />
        </div>
      </header>
      <ScrollToTop>
        <div className="page-body">
          <div className="product-container">
            {filteredProducts.slice(0, 4).map((iData: Product) => (
              <ProductCard data={iData} key={iData?.Id} />
            ))}
            <div className="image-card-wrapper">
              <ImageCard data={thumbData} />
            </div>
            {filteredProducts.slice(4).map((iData: any) => (
              <ProductCard data={iData} key={iData?.Id} />
            ))}
          </div>
        </div>
      </ScrollToTop>
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
    </div>
  )
}

ShopPage.propTypes = {
  products: PropTypes.array
}

export default ShopPage
