import './LeftSection.css';
import { CgLogOut } from "react-icons/cg";

function LeftSection() {
  return (
    <div className="left-section">
        <h3>Dashboard</h3>
        <div className="item">
            <h4>Customers</h4>
        </div>
        <div className="item">
            <h4>Products</h4>
        </div>
        <div className="item">
            <h4>Orders</h4>
        </div>
        <div className="item sign-out">
            <CgLogOut className='icon' /> <h4>Sign Out</h4>
        </div>
    </div>
  )
}

export default LeftSection