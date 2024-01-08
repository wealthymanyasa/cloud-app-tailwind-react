// import {
//     FaFacebook,
//     FaGithub,
//     FaInstagram,
//     FaTwitter,
//     FaTwitch
// } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="w-full mt-34 bg-slate-900 text-gray-300 py-6 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1 ">Marketing</li>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerve</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li className="py-1">Pricing</li>
                        <li className="py-1">Documentation</li>
                        <li className="py-1">Guides</li>
                        <li className="py-1">API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className="py-1">About</li>
                        <li className="py-1">Blog</li>
                        <li className="py-1">Jobs</li>
                        <li className="py-1">Press</li>
                        <li className="py-1">Partners</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold uppercase pt-2">Legal</h6>
                    <ul>
                        <li className="py-1">Claims</li>
                        <li className="py-1">Privacy</li>
                        <li className="py-1">Terms</li>
                        <li className="py-1">Policies</li>
                        <li className="py-1">Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2">
                <p className="font-bold uppercase">Subscribe to our newslater</p>
                <p className="py-4">Tha latest news, articles, and resources, sent to your inbox weekly</p>
                <form className="flex flex-col sm:flex-row">
                    <input type="email" className="w-full p-2 mr-4 rounded-md mb-4" placeholder="Enter email"/>
                    <button className="p-2 mb-4">Subscribe</button>
                </form>
                </div>

            </div>

            <div className="flex flex-col justify-between items-center px-2 py-4 mx-auto text-center text-gray-500 max-w-[1240px] sm:flex-row ">
                <p className="pt-4 text-white">2024 Codestar, LLC. All rights reserved</p>
                <div className="flex justify-between w-full sm:w-[300px] pt-4 text-2xl">
                  <div>ic</div>
                  <div>ic</div>
                  <div>ic</div>
                  <div>ic</div>
                  <div>ic</div>
                  
                </div>
            </div>
        </div>
    )
}

export default Footer