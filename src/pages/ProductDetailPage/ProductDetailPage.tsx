import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import SideBar from '../../components/SideBar'
import FooterBar from '../../components/FooterBar'
import ProductDetailCard from '../../components/ProductDetailCard'
import ProductCard from '../../components/ProductCard'
import { useParams } from 'react-router-dom'
import './ProductDetailPage.scoped.scss'
import ScrollToTop from '../../components/ScrollToTop'
import Spinner from '../../components/Spinner'

import { fetchProducts, addCart, addWishlist } from '../../store/product/action'

interface PropTypes {
  products: Product[],
  dispatch(action: any): Promise<any>
}

const ProductDetailPage = (props: any) => {
  const id: number = Number((useParams() as any).id);
  const { products, dispatch } = props as PropTypes
  const [data, setData] = useState<Product | undefined>(undefined)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    setData(products.find((e: Product) => e?.Id === id))
  }, [id, products])

  const handleAddCart = () => {
    dispatch(addCart(id))
  }

  const handleAddWishList = () => {
    dispatch(addWishlist(id))
  }

  return !data ? (
    <Spinner color={"#f00"} loading={true} size={100} />
  ) : (
    <div className="product-detail-page page">
      <header>
        <PageTitle title="Shop" canReturn={true} />
      </header>
      <ScrollToTop>
        <div className="page-body">
          <div className="detail-wrapper">
            <ProductDetailCard data={data} />
          </div>
          <div className="button-container-yellow">
            <button type="button" className="btn-yellow highlight" onClick={handleAddCart}>Add to cart</button>
            <button type="button" className="btn-yellow" onClick={handleAddWishList}>
              <i className="f7-icons star">star_fill</i>
              Add wish list
            </button>
          </div>
          <h3 className="related-header">
            You May Also Like
          </h3>
          <div className="product-container">
            {products && products.map((iData: any) => (
              <ProductCard data={iData} key={iData.Id} />
            ))}
          </div>
        </div>
      </ScrollToTop>
      <div className="footer-bar-wrapper">
        <FooterBar />
      </div>
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
    </div>
  )
}

ProductDetailPage.propTypes = {
}

export default ProductDetailPage
