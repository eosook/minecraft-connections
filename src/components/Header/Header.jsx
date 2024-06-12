import './Header.scss'
import logo from "../../assets/images/MINE-CONNECT-6-12-2024.png"

function Header () {
    return (
        <div className="header">
            <img src={logo}></img>
        </div>
    )
}

export default Header;