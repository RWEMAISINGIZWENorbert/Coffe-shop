import img from '../assets/img.jpg';
import './Home.css'

function Home() {
  return (
    <div className='Home'>
      <div className="left-section">
        <div className="main">
            <div className="head">
                <h1>COFFE SHOP</h1>
            </div>
            <div className='body'>
                <p>We are here to serve you every kind of the coffe you want to.Here the client is the king. Order the kind of coffe you want now and then process it in order to serve it to you.</p>
            </div >
        </div>
        <div className="btns">
            <button>login</button>
            <button> Sign up</button>
         </div>
      </div>
      <div className="right-section">
         <img src={img} alt="Coffe tea img" />
      </div>
    </div>
  )
}

export default Home