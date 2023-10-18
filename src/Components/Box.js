import earning from "../assests/earning1.png"
import bagColor from "../assests/bagColor3.png"
import order from "../assests/order1.png"
import wallet from "../assests/wallet1.png"
import { BsArrowUpShort, BsArrowDownShort} from "react-icons/bs"
import "../Styles/Box.css"

function Box() {
    return (
        <div id="boxes">
            <div className="box earning">
                <span className="imgContainer"><img src={earning} alt="earning" /></span>
                <div className="boxDescription">
                    <p className="boxHeading">Earning</p>
                    <h3>$198k</h3>
                    <p className="boxInfo"><span><BsArrowUpShort />37% </span>this month</p>
                </div>
            </div>
            <div className="box orders">
                <span className="imgContainer"><img src={order} alt="orders" /></span>
                <div className="boxDescription">
                    <p className="boxHeading">Orders</p>
                    <h3>$2.4k</h3>
                    <p className="boxInfo reduce"><span><BsArrowDownShort />2% </span>this month</p>
                </div>
            </div>
            <div className="box wallet">
                <span className="imgContainer"><img src={wallet} alt="wallet" /></span>
                <div className="boxDescription">
                    <p className="boxHeading">Balance</p>
                    <h3>$2.4k</h3>
                    <p className="boxInfo reduce"><span><BsArrowDownShort />2% </span>this month</p>
                </div>
            </div>
            <div className="box sales">
                <span className="imgContainer"><img src={bagColor} alt="sales" /></span>
                <div className="boxDescription">
                    <p className="boxHeading">Total Sales</p>
                    <h3>$89K</h3>
                    <p className="boxInfo"><span><BsArrowUpShort />11% </span>this week</p>
                </div>
            </div>
        </div>
    )
}


export default Box