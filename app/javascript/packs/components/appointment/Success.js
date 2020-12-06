
import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";

class Success extends Component {
    render() {
        const { loggedInStatus, user, handleLogout } = this.props;
        
        return (
            <div>
                <Header
                    loggedInStatus={loggedInStatus}
                    user={user}
                    isInner={true}
                    handleLogout={handleLogout}
                />
                <section id="therapists">
                    <div className="therapists-content pt-5 pb-2">
                        <div className="container py-5 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="250" height="250" viewBox="0 0 172 172">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g>
                                        <path d="M169.34609,86c0,-46.02344 -37.32266,-83.34609 -83.34609,-83.34609c-46.02344,0 -83.34609,37.32266 -83.34609,83.34609c0,46.02344 37.32266,83.34609 83.34609,83.34609c46.02344,0 83.34609,-37.32266 83.34609,-83.34609z" fill="#2ecc71"></path>
                                        <path d="M131.88906,58.08359c-1.94844,-5.07266 -5.94609,-4.26641 -10.27969,-3.39297c-2.58672,0.5375 -14.10937,3.89687 -32.28359,23.1125c-7.55859,7.96172 -12.53047,14.31094 -15.82266,19.14844c-2.01562,-2.45234 -4.3,-5.10625 -6.71875,-7.49141c-7.42422,-7.42422 -15.72187,-12.53047 -16.05781,-12.73203c-3.46016,-2.11641 -7.99531,-1.04141 -10.14531,2.45234c-2.11641,3.46016 -1.04141,7.99531 2.41875,10.14531c0.06719,0.03359 7.18906,4.43438 13.30313,10.58203c6.24844,6.24844 11.92578,14.71406 11.99297,14.81484c1.37734,2.08281 3.69531,3.29219 6.14766,3.29219c0.40312,0 0.83984,-0.03359 1.27656,-0.10078c2.88906,-0.50391 5.17344,-2.65391 5.87891,-5.47578c0.03359,-0.06719 2.95625,-8.16328 18.37578,-24.42266c12.42969,-13.13516 20.72734,-17.30078 23.61641,-18.44297c0.03359,0 0.03359,0 0.10078,0c0,0 0.10078,-0.03359 0.26875,-0.13438c0.50391,-0.20156 0.77266,-0.26875 0.77266,-0.26875c-0.13437,0.03359 -0.20156,0.03359 -0.20156,0.03359v-0.03359c1.34375,-0.57109 3.82969,-1.64609 3.86328,-1.67969c3.72891,-1.6125 4.97187,-5.64375 3.49375,-9.40625z" fill="#ffffff"></path>
                                    </g>
                                </g>
                            </svg>
                            <div>
                                <h2 className="py-4">Your booking is successfully placed.</h2>
                                <p>To check your bookings visit My Bookings inside My Account.</p>
                                <div className="form-group blue-blob pt-2 text-center">
                                    <a href="/" type="button" className="btn btn-primary green-btn">Go Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
};
export default Success;
