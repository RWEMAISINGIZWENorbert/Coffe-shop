import './SignIn.css';
// import SignUp from './SignUp.jsx';

function SignIn() {
  return (
    <div className="all-siginIn">
      <div className="all-section">
      <div className="left-section">
             <h1>COFFE SHOP</h1>
             <p>You are welcome on Coffee Shop</p>
             <div className="credentials">
                <p>Is your first time to login  <br /> <br /><a href=''>register here</a></p>
             </div>
        </div>
        <div className="right-section">
            <div className="main">
                <h4>Sigin In</h4>
                <input type="text" placeholder="username" /><br />
                <input type="text" placeholder="password" /><br />
                <button>Sign In</button><br />
            </div>
        </div>
        </div>  
    </div>
  )
}

export default SignIn