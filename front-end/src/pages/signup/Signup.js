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
        // console.log(registerInfo);
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
            console.log("sending info")
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
                            <input type="text" placeholder="H??? v?? t??n" id="name"></input>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-venus-mars" aria-hidden="true"></i>
                            <select id="gender" defaultValue="" autoComplete="off">
                                <option value="" disabled hidden>Gi???i t??nh</option>
                                <option value="male">Nam</option>
                                <option value="female">N???</option>
                                <option value="other">Kh??c</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                            <input
                                type="text"
                                placeholder="T??n ????ng nh???p"
                                id="username"
                            ></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="M???t kh???u"
                                id="password"
                            ></input>
                        </div>
                        <div className="input-group">
                        <i className="fa fa-users" aria-hidden="true"></i>
                            <select id="role" defaultValue="" autoComplete="off">
                                <option value="" disabled hidden>Vai tr??</option>
                                <option value="USER">Ng?????i mua</option>
                                <option value="SELLER">Ng?????i b??n</option>
                                <option value="DRIVER">Shipper</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-city"></i>
                            <input type="text" placeholder="Th??nh ph???" id="city"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-hospital"></i>
                            <input type="text" placeholder="Qu???n" id="district"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-home"></i>
                            <input type="text" placeholder="?????a ch???" id="address"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Email" id="email"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-phone"></i>
                            <input type="text" placeholder="S??? ??i???n tho???i" id="phone"></input>
                        </div>
                        <div className="alert-danger">Vui l??ng nh???p ?????y ????? th??ng tin</div>
                        <div className="alert-danger">T??n ????ng nh???p ???? t???n t???i, vui l??ng th??? l???i</div>
                    </div>
                    <button
                        className="btn btn-block btn-submit"
                        onClick={sendRegisterInfo}
                    >
                        ????NG K??
                    </button>
                    <div className="login-mess-policy">
                        Ch??ng t??i kh??ng s??? d???ng th??ng tin c???a b???n v???i b???t k??? m???c ????ch n??o.
                        B???ng c??ch ????ng nh???p ho???c ????ng k??, b???n ?????ng ?? v???i
                        <a
                            target="_blank"
                            href="https://shopeefood.vn/gioi-thieu#footer-bottom"
                            rel="noreferrer"
                        >
                            {" "}
                            Ch??nh s??ch quy ?????nh c???a Foody
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
