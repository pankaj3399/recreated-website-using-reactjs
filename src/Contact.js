import React from "react"
import ReactDOM from "react-dom"
import {FaStar, FaMobileAlt, FaEnvelope} from "react-icons/fa"

const Contact = () => {
    return(
        <div>
        <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
            </div>

            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><FaStar/></div>
                <div class="divider-custom-line"></div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="d-flex flex-column align-items-center">
                        <div class="icon-contact mb-3"><FaMobileAlt/></div>
                        <div class="text-muted">Phone</div>
                        <div class="lead font-weight-bold">(555) 555-5555</div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="d-flex flex-column align-items-center">
                        <div class="icon-contact mb-3"><FaEnvelope/></div>
                        <div class="text-muted">Email</div><a class="lead font-weight-bold" href="mailto:name@example.com">name@example.com</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </div>
    )
}

export default Contact