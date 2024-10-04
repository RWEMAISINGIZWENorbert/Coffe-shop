import LeftSection from "./LeftSection";
import Customers from './Customers'
import './Admin.css';

function Admin() {
  return (
    <div>
        <div className="left">
            <LeftSection/>
             <Customers />
        </div>
    </div>
  )
}

export default Admin