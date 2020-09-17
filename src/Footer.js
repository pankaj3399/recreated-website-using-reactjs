import React from "react"
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble} from "react-icons/fa"

const Footer = () => {
    return (
    <div>
    <footer class="footer text-center">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="mb-4">LOCATION</h4>
                <p class="pre-wrap lead mb-0">
                    2215 John Daniel Drive Clark, MO 65243
                </p>
            </div>

            <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="mb-4">AROUND THE WEB</h4>
                <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/StartBootstrap"><FaFacebookF/></a><a class="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/sbootstrap"><FaTwitter/></a><a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/startbootstrap"><FaLinkedinIn/></a><a class="btn btn-outline-light btn-social mx-1" href="https://www.dribble.com/startbootstrap"><FaDribbble/></a>
            </div>

            <div class="col-lg-4">
                <h4 class="mb-4">ABOUT FREELANCER</h4>
                <p class="pre-wrap lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap</p>
            </div>

        </div>
    </div>
</footer>
    </div>
    )
}

export default Footer