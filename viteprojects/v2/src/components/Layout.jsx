import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

//outlet is a special  component provided by react router that allows us to render the correct child route out of all the routes defined . it means that the stuff written abouve and below the outlet tag will remain constant and the rest can be canged dynamically
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
