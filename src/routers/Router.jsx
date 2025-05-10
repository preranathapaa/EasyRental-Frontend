import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Booking from '../pages/Booking'


const Router = () => {
  return (

    <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/booking" element={<Booking/>} />


    </Routes>
   
  )
}

export default Router