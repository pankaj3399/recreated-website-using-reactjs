import React from "react"
import {FaStar} from "react-icons/fa"

const HeroSection = () => (
    <div>
    <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="" />
                <h1 class="masthead-heading mb-0">START BOOTSTRAP</h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><FaStar/></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="pre-wrap masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
            
    </div>   
)

export default HeroSection