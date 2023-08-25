import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from '../Images/logo.png'

function Footer() {
    return (
        <div className="h-full md:h-[120vh] lg:h-[45vh] w-full text-white bg-black flex flex-col lg:flex-row justify-start lg:justify-around gap-4 p-4 items-start px-6 lg:px-0 lg:pt-16">
            <div className="w-full h-fit lg:w-[13%] text-white flex flex-col gap-8  md:items-center lg:items-start">
                <div className="heading tracking-widest justify-center items-center flex flex-row md:flex-row md:gap-4 lg:flex-col lg:gap-0 gap-2">
                    <img className="h-52" src={logo} alt="" />
                </div>
                <div className="flex gap-3 text-2xl">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaYoutube />
                </div>
                <div className="text-base text-orange-500">
                    @2023 by PCCOE Powered and secured by GoDev
                </div>
            </div>
            <div className="w-full h-fit lg:w-[20%] flex flex-col gap-10  md:items-center lg:items-start">
                <h2 className="uppercase text-xl font-bold tracking-widest text-pink-600">
                    hours of operation
                </h2>
                <div className="text-[17px] tracking-wide">
                    <p>Mon-Thu: 9AM-8PM</p>
                    <p>Friday: 9AM-3PM</p>
                    <p>Sat-Sun: Closed</p>
                </div>
            </div>
            <div className="w-full h-fit lg:w-[16%] flex flex-col gap-10  md:items-center lg:items-start">
                <h2 className="uppercase text-xl font-bold tracking-widest text-pink-600">
                    contact us
                </h2>
                <div className="text-[17px] tracking-wide">
                    <p>500 Terry Francine Street</p>
                    <p>San Francisco, CA 94158</p>
                </div>
                <div className="text-[17px] tracking-wide">
                    <p>Mail: info@mysite.com</p>
                    <p>Tel: 123-456-7890</p>
                </div>
            </div>
            <div className="w-full h-fit lg:w-[20%] flex flex-col items-start gap-8 lg:pl-6 md:items-center lg:items-start">
                <h2 className="uppercase text-xl font-bold tracking-widest text-pink-600">
                    menu
                </h2>
                <ul className="list-square text-[17px] marker:text-pink-600 pl-6 lg:pl-6 cursor-pointer">
                    <li className=" hover:text-gray-300">Services</li>
                    <li className=" hover:text-gray-300">About</li>
                    <li className=" hover:text-gray-300">Plans</li>
                    <li className=" hover:text-gray-300">Online Programs </li>
                    <li className=" hover:text-gray-300">Contact</li>
                </ul>
                <button className="py-3 px-8 border border-1 border-pink-600 text-white text-2xl font-bold tracking-widest hover:bg-pink-600 hover:text-white transistion duration-500">Register</button>

            </div>
        </div>
    );
}

export default Footer;