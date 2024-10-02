import { useState  } from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import './Product.css'
import img from '../assets/img.jpg'

function Product() {

   const [cons,setCons] = useState(1);

   const [products] = useState([
      {
         "name": "Hot Coffee",
         "image": img,
         "price": '1200 RWF',
         "desc": 'The hot coffe is much better'
       },
      // {
      //    "name": "Hot Coffee 1",
      //    "image": img,
      //    "price": '1200 RWF',
      //    "desc": 'The hot coffe is much better'
      //  },
      // {
      //    "name": "Hot Coffee 2",
      //    "image": img,
      //    "price": '1200 RWF',
      //    "desc": 'The hot coffe is much better'
      //  }
      ]
   )


  return (

   products.map((product) => {
      return (
<>
{/* <div className='product'> */}
    <div className="main-product" key={product.name}>
       <div className="main" key={product.name}> 
               <img src={product.image}  />
               <div className="namP">
                  <p className='name' >{product.name}</p>
                   <p className='price'>price: {product.price}</p>
                </div>
               <div className="desc">
                  <p>{product.desc}</p>
                </div>
            <div className="credentials">
              <button>Like it <CiHeart/> <p>{cons}</p></button>  
            <button onClick={setCons((cons) => cons + 1)}>Add to cart <CiShoppingCart className="icon" /></button>
        </div>            
        </div>
    </div>
    {/* </div> */}
</> 

      )
   })


        /* <div className="main-product">
           <div className="main"> 
                   <img src={img} alt="" />
                   <div className="namP">
                      <p className='name'>Hot coffe</p>
                       <p className='price'>price: 1200RWF</p>
                    </div>
                   <div className="desc">
                      <p>This hot coffe is much better</p>
                    </div>
                <div className="credentials">
                  <button>Like it <CiHeart/></button>  
                <button>Add to cart <CiShoppingCart className="icon" /></button>
            </div>            
            </div>
        </div>
        <div className="main-product">
           <div className="main"> 
                   <img src={img} alt="" />
                   <div className="namP">
                      <p className='name'>Hot coffe</p>
                       <p className='price'>price: 1200RWF</p>
                    </div>
                   <div className="desc">
                      <p>This hot coffe is much better</p>
                    </div>
                <div className="credentials">
                  <button>Like it <CiHeart/></button>  
                <button>Add to cart <CiShoppingCart className="icon" /></button>
            </div>            
            </div>
        </div>
        <div className="main-product">
           <div className="main"> 
                   <img src={img} alt="" />
                   <div className="namP">
                      <p className='name'>Hot coffe</p>
                       <p className='price'>price: 1200RWF</p>
                    </div>
                   <div className="desc">
                      <p>This hot coffe is much better</p>
                    </div>
                <div className="credentials">
                  <button>Like it <CiHeart/></button>  
                <button>Add to cart <CiShoppingCart className="icon" /></button>
            </div>            
            </div>
        </div>
        <div className="main-product">
           <div className="main"> 
                   <img src={img} alt="" />
                   <div className="namP">
                      <p className='name'>Hot coffe</p>
                       <p className='price'>price: 1200RWF</p>
                    </div>
                   <div className="desc">
                      <p>This hot coffe is much better</p>
                    </div>
                <div className="credentials">
                  <button>Like it <CiHeart/></button>  
                <button>Add to cart <CiShoppingCart className="icon" /></button>
            </div>            
            </div>
        </div>
        <div className="main-product">
           <div className="main"> 
                   <img src={img} alt="" />
                   <div className="namP">
                      <p className='name'>Hot coffe</p>
                       <p className='price'>price: 1200RWF</p>
                    </div>
                   <div className="desc">
                      <p>This hot coffe is much better</p>
                    </div>
                <div className="credentials">
                  <button>Like it <CiHeart/></button>  
                <button>Add to cart <CiShoppingCart className="icon" /></button>
            </div>            
            </div>
        </div>
        <div className="main-product">
           <div className="main"> 
                   <img src={img} alt="" />
                   <div className="namP">
                      <p className='name'>Hot coffe</p>
                       <p className='price'>price: 1200RWF</p>
                    </div>
                   <div className="desc">
                      <p>This hot coffe is much better</p>
                    </div>
                <div className="credentials">
                  <button>Like it <CiHeart/></button>  
                <button>Add to cart <CiShoppingCart className="icon" /></button>
            </div>            
            </div>
        </div>
        <div className="main-product">
           <div className="main"> 
                   <img src={img} alt="" />
                   <div className="namP">
                      <p className='name'>Hot coffe</p>
                       <p className='price'>price: 1200RWF</p>
                    </div>
                   <div className="desc">
                      <p>This hot coffe is much better</p>
                    </div>
                <div className="credentials">
                  <button>Like it <CiHeart/></button>  
                <button>Add to cart <CiShoppingCart className="icon" /></button>
            </div>            
            </div>
        </div> */
  )
}

export default Product