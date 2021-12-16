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


const Login = () => {
    return (
        <div className="header_user">
            <p className="btn">
            <a href="/login">Đăng nhập</a>
            </p>
        </div>
    );
};

const User = (props) => { 
    function logout() {
        props.setUser('');
    }
    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle header_user-dropdown"
                type="button"
                data-bs-toggle="dropdown"
            >
                {props.username}
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="/">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>Lịch sử đơn hàng
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="/">
                        <i class="fa fa-gift" aria-hidden="true"></i>Ví voucher
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="/">
                        <i class="fa fa-user" aria-hidden="true"></i>Cập nhật tài khoản
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="/" onClick={logout}>
                        <i class="fa fa-power-off" aria-hidden="true"></i>Đăng xuất
                    </a>
                </li>
            </ul>
        </div>
    );
}

const Header = (props) => {
    if ( props.user ===  '')
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <Dropdown />
                <Navbar />
                <Search/>
                <Login />
            </div>
            
        </div>
    );
    else return (
        <div className="header">
            <div className="container">
                <Logo />
                <Dropdown />
                <Navbar />
                <Search/>
                <User 
                    username = {props.user}
                    setUser = {props.setUser}/>
            </div>
            
        </div>
    )
};

export default Header;
