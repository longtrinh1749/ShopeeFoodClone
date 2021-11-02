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
        <div class="dropdown">
            <button
                class="btn dropdown-toggle header_dropdown"
                type="button"
                id="location"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Hà Nội
            </button>
            <ul
                class="dropdown-menu"
                aria-labelledby="location"
            >
                <li>
                    <a class="dropdown-item" href="/">
                        Action
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="/">
                        Another action
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="/">
                        Something else here
                    </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                    <a class="dropdown-item" href="/">
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
    )
}

const Search = () => {
    return (
        <div className="header_search">
            <i className="las la-search"></i>
        </div>
    )
}

const User = () => {
    return (
        <div className="header_user">
            <p className="btn">
                Đăng nhập
            </p>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Logo />
                <Dropdown />
                <Navbar />
                <Search />
                <User />
            </div>
        </div>
    );
};

export default Header;
