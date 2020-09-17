import React from "react"
import NavBar from "./NavBar"
import HeroSection from "./HeroSection"
import Portfolio from "./Portfolio"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Copyright from "./Copyright"
import body from "./body.css"
import heading from "./heading.css"
import styles from "./styles.css"


const App = () => {
    return(
        <div>
            <NavBar />
            <HeroSection />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
        </div>
    )
}


export default App;

