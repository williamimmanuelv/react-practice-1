import { Routes , Route} from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/ChechoutPage'
import { OrdersPage } from './pages/OdersPage'
import './App.css'
import { TrackingPage } from './pages/checkout/TrackingPage'
import { NotFound } from './pages/NotFound'


function App() {


  return (
    <>  
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='checkout' element={<CheckoutPage/>}/>
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

    </>
  )
}

export default App
