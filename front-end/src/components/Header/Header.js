import Search from "./components/Search";
import "./header.scss";

const Logo = () => {
    return (
        <div className="header_img">
            <a href="/">
                <img src="/images/shopeefoodvn.png" alt="" />
            </a>
        </div>
    );
};

const Dropdown = () => {
    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle header_dropdown"
                type="button"
                id="location"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Hà Nội
            </button>
            <ul className="dropdown-menu" aria-labelledby="location">
                <li>
                    <a className="dropdown-item" href="/">
                        Action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="/">
                        Another action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="/">
                        Something else here
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="/">
                        Separated link
                    </a>
                </li>
            </ul>
        </div>
    );
};

const Navbar = () => {
    return (
        <div className="header_navbar">
            <ul>
                <li className="active">Đồ ăn</li>
                <li>Thực phẩm</li>
                <li>Hoa</li>
                <li>Thuốc</li>
            </ul>
        </div>
    );
};


const User = () => {
    return (
        <div className="header_user">
            <p className="btn">Đăng nhập</p>
        </div>
    );
};

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <Dropdown />
                <Navbar />
                <Search/>
                <User />
            </div>
            
        </div>
    );
};

export default Header;
