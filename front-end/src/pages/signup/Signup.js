import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    const navigate = useNavigate();
    function sendRegisterInfo() {
        let name = document.getElementById("name").value;
        let gender = document.getElementById("gender").value;
        let role = document.getElementById("role").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let city = document.getElementById("city").value;
        let district = document.getElementById("district").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let registerInfo = {
            name: name,
            gender: gender,
            username: username,
            password: password,
            role: role,
            city: city,
            district: district,
            address: address,
            email: email,
            phone: phone,
        };
        console.log(registerInfo);
        if (
            name === "" ||
            gender === "" ||
            username === "" ||
            password === "" ||
            city === "" ||
            district === "" ||
            address === "" ||
            email === "" ||
            phone === ""
        ) {
            document.getElementsByClassName("alert-danger")[0].style.display =
                "block";
        } else {
            axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}:8400/v1/public/register`, registerInfo)
          .then( (response)=>{
            console.log(response);
              if( response.data.result === "Register failed") {
                document.getElementsByClassName("alert-danger")[0].style.display = "none";
                document.getElementsByClassName("alert-danger")[1].style.display = "block";
              }else {
                    document.getElementsByClassName("alert-danger")[0].style.display = "none";
                    document.getElementsByClassName("alert-danger")[1].style.display = "none";
                    // props.setUser(username);
                    navigate('/login');
              }
          })
          .catch(function (error) {
              console.log(error)
            document.getElementsByClassName("alert-danger")[1].style.display = "block";
          });
         }
    }
    return (
        <div className="wrapper">
            <div className="content-container">
                <div className="title">Sign up</div>
                <div className="form-login-input">
                    <div className="field-group">
                        <div className="input-group">
                            <i className="far fa-user"></i>
                            <input type="text" placeholder="Họ và tên" id="name"></input>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-venus-mars" aria-hidden="true"></i>
                            <select id="gender" defaultValue="" autoComplete="off">
                                <option value="" disabled hidden>Giới tính</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                            <input
                                type="text"
                                placeholder="Tên đăng nhập"
                                id="username"
                            ></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                id="password"
                            ></input>
                        </div>
                        <div className="input-group">
                        <i class="fa fa-users" aria-hidden="true"></i>
                            <select id="role" defaultValue="" autoComplete="off">
                                <option value="" disabled hidden>Vai trò</option>
                                <option value="SELLER">Người mua</option>
                                <option value="DRIVER">Người bán</option>
                                <option value="USER">Shipper</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-city"></i>
                            <input type="text" placeholder="Thành phố" id="city"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-hospital"></i>
                            <input type="text" placeholder="Quận" id="district"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-home"></i>
                            <input type="text" placeholder="Địa chỉ" id="address"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Email" id="email"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-phone"></i>
                            <input type="text" placeholder="Số điện thoại" id="phone"></input>
                        </div>
                        <div className="alert-danger">Vui lòng nhập đầy đủ thông tin</div>
                        <div className="alert-danger">Tên đăng nhập đã tồn tại, vui lòng thử lại</div>
                    </div>
                    <button
                        className="btn btn-block btn-submit"
                        onClick={sendRegisterInfo}
                    >
                        ĐĂNG KÝ
                    </button>
                    <div className="login-mess-policy">
                        Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
                        Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với
                        <a
                            target="_blank"
                            href="https://shopeefood.vn/gioi-thieu#footer-bottom"
                            rel="noreferrer"
                        >
                            {" "}
                            Chính sách quy định của Foody
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
