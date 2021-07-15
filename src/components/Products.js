import React,{useContext} from 'react'
import products from './styles/products.css'
import { DataContext } from './Dataprovider';
import { Link } from 'react-router-dom';




export default function Products() {
    const [products, setProducts] = useContext(DataContext)
    console.log(products)
  return (
      <div className="products">
          {
              products.map(product => (
         
                  <div className="card" key={product._id}>
                      <Link to={`/products/${product._id}`}>
                          <img src={product.images[0]} alt=""/>
                      </Link>
                      <div className="box">
                          <h3>
                              <Link to={`/products/${product._id}`}>{product.title }</Link>
                          </h3>
                          <p>{product.description}</p>
                          <h4>{product.price }</h4>
                      
                          <div className="buttondiv">
                              <button onClick={() => alert("its already added")}>Add to cart</button>
                              <button className="buy" onClick={() => alert("Sorry, not enought monay in your wallet")}>buy</button>
                          </div>
                      </div>
                  </div>
              ))
          }
            </div>
  )
}


