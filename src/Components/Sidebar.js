import "../Styles/Sidebar.css"
import logo from "../assests/logo.png"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { LuLayoutDashboard } from "react-icons/lu"
import { PiCubeLight, PiUsersThreeLight } from "react-icons/pi"
import { HiOutlineWallet } from "react-icons/hi2"
import { MdOutlineLocalOffer } from "react-icons/md"
import { BiHelpCircle } from "react-icons/bi"
import userimg from "../assests/userimg.jpg"
import { useEffect, useState } from "react"


function Sidebar() {
   

    function toggleFunction() {
        let sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle("close")
    }

    function closeSidebar() {
        let sidebar = document.querySelector(".sidebar")
        sidebar.classList.add("close")
    }

    function openSidebar(){
        let sidebar = document.querySelector(".sidebar")
        sidebar.classList.remove("close")
    }

    const [width, setWidth] = useState(window.innerWidth)

    function detectWidth() {
        setWidth(window.innerWidth)
        if (width < 768) {
            closeSidebar()
        } else {
            openSidebar()
        }
    }
    useEffect(() => {
        window.addEventListener('resize', detectWidth)

        return () => {
            window.removeEventListener('resize', detectWidth)
        }
    }, [width])
    return (
        <nav className="sidebar">
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={logo} alt="logo" />
                    </span>
                    <div className="text header-text">
                        <span className="name">
                            Dashboard
                        </span>
                    </div>
                </div>
                <IoIosArrowDroprightCircle className="toggle" onClick={toggleFunction} />
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li>
                            <a href="#" onClick={detectWidth}>
                                <LuLayoutDashboard className="icons" />
                                <span className="text nav-text" >Dashboard</span>
                            </a>
                        </li>
                        <li >
                            <a href="#" onClick={detectWidth}>
                                <PiCubeLight className="icons" />
                                <span className="text nav-text">Product</span>
                            </a>
                        </li>
                        <li >
                            <a href="#" onClick={detectWidth}>
                                <PiUsersThreeLight className="icons" />
                                <span className="text nav-text">Customers</span>
                            </a>
                        </li>
                        <li >
                            <a href="#" onClick={detectWidth}>
                                <HiOutlineWallet className="icons" />
                                <span className="text nav-text">Income</span>
                            </a>
                        </li>
                        <li >
                            <a href="#" onClick={detectWidth}>
                                <MdOutlineLocalOffer className="icons" />
                                <span className="text nav-text">Promote</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={detectWidth}>
                                <BiHelpCircle className="icons" />
                                <span className="text nav-text">Help</span>
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="bottom-content">
                    <span className="userImg">
                        <img src={userimg} alt="userimg" />
                    </span>
                    <div className="text header-text">
                        <span className="userName">Evano</span>
                        <span className="userDesg">Project Manager</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar