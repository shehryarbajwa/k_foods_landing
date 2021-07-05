import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar click={toggle} />
            <HeroSection />
            <InfoSection />
        </>
    )
}

export default Home;

