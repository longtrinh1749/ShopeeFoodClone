import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-1">
                    <div className="footer_title">Công ty</div>
                    <ul>
                        <li>
                            <a href="/">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="/">Trung tâm hỗ trợ</a>
                        </li>
                        <li>
                            <a href="/">Quy chế</a>
                        </li>
                        <li>
                            <a href="/">Điều khoản sử dụng</a>
                        </li>
                        <li>
                            <a href="/">Bảo mật thông tin</a>
                        </li>
                        <li>
                            <a href="/">Giải quyết khiếu nại</a>
                        </li>
                        <li>
                            <a href="/">Liên hệ</a>
                        </li>
                        <li>
                            <a href="/">Hợp tác nhân viên giao nhận</a>
                        </li>
                        <li>
                            <a href="/">Đăng ký quán</a>
                        </li>
                        <li>
                            <a href="/">ShopeeFoor Uni</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-2">
                    <div className="footer_title">Ứng dụng ShopeeFood</div>
                    <ul>
                        <li>
                            <a href="/">
                                <img src="/images/AppStore-vn.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/PlayStore-vn.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/Huawei-gallery-vn.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-3">
                    <div className="footer-3_logo">
                        <a href="/">
                            <img src="/images/Logo-ShopeefoodVN.png" alt="" />
                        </a>
                    </div>
                    <div className="footer-3_social">
                        <a href="/">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-4">
                    <div className="footer_title">Địa chỉ công ty</div>
                    <div className="footer-4_info">
                        <p>Công Ty Cổ Phần Foody</p>
                        <p>Lầu G, Tòa nhà Jabes 1,</p>
                        <p>
                            số 244 đường Cống Quỳnh, phường Phạm Ngũ Lão, Quận 1,
                            TPHCM
                        </p>
                        <p>Giấy CN ĐKDN số: 0311828036</p>
                        <p>do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2012,</p>
                        <p>sửa đổi lần thứ 23, ngày 10/12/2020</p>
                        <p>Số điện thoại: 1900 2042</p>
                        <p>
                            Email:{" "}
                            <a href="mailto:info@shopeefood.vn">
                                info@shopeefood.vn
                            </a>
                        </p>
                        <img src="/images/gov_seals1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
