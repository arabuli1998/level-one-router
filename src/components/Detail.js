import React,{useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './Dataprovider';
import detail from './styles/detail.css'
import Imagethumb from './Imagethumb';
import Products from './Products'


export default function Detail() {
    const { id} = useParams();
    const [products, setProducts] = useContext(DataContext)
    const [index, setIndex] = useState(0);
    const details = products.filter((product, index) => {
        return product._id===id

    })
    console.log(details)
    return (
        <>
            {
                details.map(product => (
                    <div className="full" key={product._id}>

                        <div className="firstcol">
                        <div className="img"
                                style={{ backgroundImage: `url(${product.images[index]})` }} />
                            <Imagethumb images={product.images} setIndex={setIndex} className="images"/>
                        </div>
                        
                        
                        <div id="details">
                        <div className="prices">
                            <h2>{product.title}</h2>
                            <p>SHIRTS</p>
                                <h3>{product.price}</h3>
                                </div>
                        
                            <div className="ccc">
                            <p className="p"><h4>Model: &nbsp;</h4>{product.model}</p>
                            <p className="p"><h4>Color: &nbsp;</h4>{product.color}</p>
                                <p className="p"><h4>Delivery: &nbsp;</h4>{product.delivery}</p>
                                <nav className="nav"></nav>
                            </div>
                           
                            <div className="description">
                                <p>{product.description}</p>
                            </div>
                            
                            
                            <div className="butons">
                                <button className="add">Add to card</button>
                                <button className="buy">Buy now</button>
                            </div>
                           
                            

                        </div>
                        




                 </div>   

                ))
            }
            <div className="relative"><h2>Relative products</h2></div>
            <Products />
        </>
    )
}
