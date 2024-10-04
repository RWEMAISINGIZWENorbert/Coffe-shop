import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
// import SignIn from './components/Form/SignIn';
// import SignUp from './components/Form/SignUp';
import Admin from './components/Admin/Admin';
import Customers from './components/Admin/Customers';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'

function App() {

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/products',
      element: <Product />,
    },
    {
      path: '/Cart',
      element: <Cart/>  
    },
    {
      path: '/Admin',
      element: <Admin/>,
      // children: [
      //   {
      //     path: '/customers',
      //     element: <Customers/>
      //   }
      // ]
    }

  ])

  return (
    <>
      <Header />
      <RouterProvider router={routers} />
    </>
  )
}

export default App
