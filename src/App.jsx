import { Routes , Route} from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/ChechoutPage'
import { OrdersPage } from './pages/OdersPage'
import './App.css'


function App() {


  return (
    <>  
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='checkout' element={<CheckoutPage/>}/>
      <Route path='orders' element={<OrdersPage/>}/>

    </Routes>

    </>
  )
}

export default App
