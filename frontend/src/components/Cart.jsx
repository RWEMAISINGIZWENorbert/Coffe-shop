 import { CiShoppingCart } from "react-icons/ci";
import './Cart.css';

function Cart() {
  return (
    <div className='cart-products'>
          <h1>Your Orders<CiShoppingCart/></h1>
        <div className="product-orders">
            <table >
                <tr>
                    <th>Id</th>
                    <th>Products</th>
                    <th>Price</th>
                </tr>
            </table>
        </div>
    </div>
  )}

export default Cart;