import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Router from '../routers/Router'


const Layout = () => {
    return (
        <>

            <Header />

            <Router />
            <Footer />
        </>
    )
}

export default Layout