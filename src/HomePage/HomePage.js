import React from 'react'
import Header from './Header/Header'
import ListSection from './ListSection/ListSection'
import Design from './Design/Design'
import Support from './Support/Support'
import Specialization from './Specialization/Specialization'
import Faq from './Faq/Faq'
import Footer from './Footer/Footer'
const HomePage = () => {
  return (
    <div>
        <Header/>
        <ListSection/>
        <Design/>
        <Support/>
        <Specialization/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default HomePage