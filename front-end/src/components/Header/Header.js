import { Link } from "react-router-dom";
import SearchModal from "../SearchModal";
import "./header.scss";
import { useNavigate } from 'react-router-dom';
const Logo = () => {
    return (
        <div className="header_img">
            <Link to="/">
                <img src="/images/shopeefoodvn.png" alt="" />
            </Link>
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
                <li className="active">
                    <a href="/">Đồ ăn</a>
                </li>
                <li>
                    <a href="/">Thực phẩm</a>
                </li>
                <li>
                    <a href="/">Hoa</a>
                </li>
                <li>
                    <a href="/">Thuốc</a>
                </li>
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
    const navigate = useNavigate();
    function logout() {
        props.setUser({
            username:'',
            headerKey: ''
        });
    }
    function moveToUpdate(){
        navigate('/profile')
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
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        ></i>
                        Lịch sử đơn hàng
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="/">
                        <i className="fa fa-gift" aria-hidden="true"></i>Ví
                        voucher
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={moveToUpdate}>
                        <i className="fa fa-user" aria-hidden="true"></i>Cập
                        nhật tài khoản
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="/" onClick={logout}>
                        <i className="fa fa-power-off" aria-hidden="true"></i>
                        Đăng xuất
                    </a>
                </li>
            </ul>
        </div>
    );
};

const SearchButton = () => {
    
    return (
        <div className="header_search">
            <span data-bs-toggle="modal" data-bs-target="#search-modal">
                <i className="las la-search"></i>
            </span>
        </div>
    );
};

const Header = (props) => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <Logo />
                    {/* <Dropdown /> */}
                    <Navbar />
                    <SearchButton />
                    {props.user.username === "" ? (
                        <Login />
                    ) : (
                        <User username={props.user.username} setUser={props.setUser} />
                    )}
                </div>
            </div>
            <SearchModal />
        </>
    );
};

export default Header;
