import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const navigate = useNavigate();
    function sendAuthenInfo(){
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let authenInfo = {
            "username" : username,
            "password" : password
        }
        console.log(authenInfo)
        console.log(process.env.REACT_APP_SERVER_ADDRESS)
        axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}:8400/auth`, authenInfo)
          .then( (response)=>{
            console.log(response.data);
            document.getElementsByClassName("alert-danger")[0].style.display = "none";
            props.setUser({
                username: username,
                headerKey: response.data.token,
                id : '',
                role: response.data.role
            });
            let config = {
                headers : {
                    Authorization:  response.data.token
                } 
            }
            axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8400/v1/user`, config)
                .then((res)=> {
                    console.log(res.data.data.userId)
                    // const userInfo = res.data.data
                    props.setUser({
                        username: username,
                        headerKey: response.data.token,
                        id : res.data.data.userId,
                        role: response.data.role
                    });
                })
            // phân luồng người dùng ở đây
            navigate('/home');
          })
          .catch(function (error) {
              console.log(error)
            document.getElementsByClassName("alert-danger")[0].style.display = "block";
          });
    }
    function signupClickHandler() {
        navigate('/signup');
    }
    return (
        <div className="login-wrapper">
            <div className="content-container">
                <div className="title">Sign up</div>
                <div className="login-via"> 
                    <div className="item phone">
                        <span><i className="fas fa-mobile-alt"></i>SỐ ĐIỆN THOẠI</span>
                    </div>
                    <div className="item facebook">
                        <span><i className="fab fa-facebook-f"></i>FACEBOOK</span>
                    </div>
                    <div className="item google" onClick={signupClickHandler}>
                        <span>
                        ĐĂNG KÝ NGAY
                        </span>
                    </div>
                </div>
                <div className="alert-danger">Tên đăng nhập hoặc mật khẩu không chính xác</div>
                <div>Hoặc đăng nhập bằng tài khoản của bạn</div>
                <div className="form-login-input">
                    <div className="field-group">
                        <div className="input-group">
                            <i className="far fa-envelope"></i>
                            <input type="text" placeholder="Username or email" id="username"></input>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" id="password"></input>
                        </div>
                    </div>
                    <div className="form-group clearfix">
                        <div className="float-left">
                            <input type="checkbox" id="RememberMe"></input>
                            <label>Lưu thông tin đăng nhập</label>
                        </div>
                    <span className="float-right"><a href="/login">Quên mật khẩu?</a></span>
                    </div>
                    <button className="btn btn-block btn-submit" onClick={sendAuthenInfo}>ĐĂNG NHẬP</button>
                    <div className="login-mess-policy">
                        Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với 
                        <a target="_blank" rel="noreferrer" href="https://shopeefood.vn/gioi-thieu#footer-bottom">  Chính sách quy định của Foody</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
