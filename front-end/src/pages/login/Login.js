import './Login.css'
import axios from 'axios'
const Login = () => {
    function getAuthenInfo(){
        let config = {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGltZWFyYTQiLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImlhdCI6MTYzOTQwOTM4NywiZXhwIjoxNjM5NDk1Nzg3fQ.BGBclGWtCMGr2pZEcgE7PomX6jwgVoXV-nB337kjFV7lAXnJ94MW971scQZLemaWKWEE2yZBJCQ9kMKzFVNL4w",
            }
          }
        // let username = document.getElementById("username");
        // let password = document.getElementById("password");
        // let authenInfo = {
        //     "username" : username,
        //     "password" : password
        // }
        axios.post('http://localhost:8400/v1/user', 
        {
            username: 'admin',
            password: '12345'
        }, config)
          .then( (response)=>{
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    function sendAuthenInfo(){
        
    }
    return (
        <div className="wrapper">
            <div className="content-container">
                <div className="title">Sign up</div>
                <div className="login-via"> 
                    <div className="item phone">
                        <span><i className="fas fa-mobile-alt"></i>SỐ ĐIỆN THOẠI</span>
                    </div>
                    <div className="item facebook">
                        <span><i className="fab fa-facebook-f"></i>FACEBOOK</span>
                    </div>
                    <div className="item google">
                        <span>
                            <i className="fab fa-google-plus-g" aria-hidden="true"></i>
                            GOOGLE
                        </span>
                    </div>
                </div>
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
                    <span className="float-right"><a href="">Quên mật khẩu?</a></span>
                    </div>
                    <button className="btn btn-block btn-submit" onClick={getAuthenInfo}>ĐĂNG NHẬP</button>
                    <div className="login-mess-policy">
                        Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào. Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với 
                        <a target="_blank" href="https://shopeefood.vn/gioi-thieu#footer-bottom">  Chính sách quy định của Foody</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
