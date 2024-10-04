import './Customers.css';
// import { useEffect } from 'react';

 function Customers() {
    
const data = async() =>{
    try{
        const response =  fetch(' http://localhost:3000/api/customers/');
        
        if(!response.ok) console.log('There is new err');
    
        const data = await response.json();
        console.log(data)
    
        }catch(err){
            console.log(err);
        }
}

data();

  return (
    <div className='customers'>
        <div className="head">
            <h4>Customers</h4>
        </div>
        <div className="content">
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>NAMES</th>
                    <th>TEL</th>
                    <th>EMAIL</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>rwema</td>
                    <td>0793622719</td>
                    <td>rwema916@gmail.com</td>
                </tr>
            </table>    
        </div>
    </div>
  )
}

export default Customers