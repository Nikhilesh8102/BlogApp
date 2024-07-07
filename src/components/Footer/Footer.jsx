
import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from '../Logo'
function Footer() {
    return (
        <section className="relative bottom-0 py-8 footer text-white border-t-2 border-gray-600">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap  items-start">
                {/* Logo Column */}
                <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <div className="mb-4 inline-flex items-center">
                        <Logo width="100px" />
                    </div>
                </div>

                {/* Links Columns */}
                <div className="w-full md:w-7/12 flex justify-between flex-wrap">
                    <div className="w-full md:w-2/12 mb-6 md:mb-0">
                        <h3 className="text-xs font-semibold uppercase mb-4">Company</h3>
                        <ul>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Features</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Pricing</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Affiliate Program</Link>
                            </li>
                            <li>
                                <Link className="text-sm hover:text-gray-400" to="/">Press Kit</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-2/12 mb-6 md:mb-0">
                        <h3 className="text-xs font-semibold uppercase mb-4">Support</h3>
                        <ul>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Account</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Help</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="text-sm hover:text-gray-400" to="/">Customer Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-3/12 mb-6 md:mb-0">
                        <h3 className="text-xs font-semibold uppercase mb-4">Legals</h3>
                        <ul>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Terms &amp; Conditions</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="text-sm hover:text-gray-400" to="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className="text-sm hover:text-gray-400" to="/">Licensing</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Text */}
                <div className="w-full text-sm text-gray-900 mt-4">
                    <p className="mt-auto text-white">
                        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by Nikhilesh Ravulapelli.
                    </p>
                </div>
            </div>
        </section>


    )
}

export default Footer