import React from 'react'
import Header from '../partials/header'
import Footer from '../partials/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}
