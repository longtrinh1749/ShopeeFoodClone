import "./updateAccount.css";
import axios from "axios";
const UpdateAccount = (props) => {
    // get user info from DB and set to front 
function updateUI(name, gender, email, phone, city, district, address){
        document.getElementById('name').value = name;
            document.getElementById('gender').value =gender;
            document.getElementById('email-update').innerHTML = email;
            document.getElementById('phone').value = phone;
            document.getElementById('city').value = city;
            document.getElementById('district').value = district;
            document.getElementById('address').value = address;
}
    let config = {
        headers : {
            Authorization: props.user.headerKey
        } 
    }
    axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8400/v1/user`, config)
        .then((res)=> {
            console.log(res.data.data)
            const userInfo = res.data.data
            updateUI(userInfo.name, userInfo.gender, userInfo.email, userInfo.phone, userInfo.city, userInfo.district, userInfo.address)
        })
    function showUpdatePassword() {
        document.getElementsByClassName("password-row")[0].style.display = "none";
        document.getElementsByClassName("update-password")[0].style.display =
            "table-row";
        document.getElementsByClassName("update-password")[1].style.display =
            "table-row";
        document.getElementsByClassName("update-password")[2].style.display =
            "table-row";
    }
    // send update info req 
    function updateInfo(){
        const updateInfo = { 
            name: document.getElementById('name').value,
            gender: document.getElementById('gender').value,
            phone: document.getElementById('phone').value,
            city:  document.getElementById('city').value,
            district:  document.getElementById('district').value,
            address: document.getElementById('address').value
        }
        axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}:8400/v1/user`, updateInfo, config)
            .then((res)=>{
                console.log(res)
                const userInfo = res.data.data
            updateUI(userInfo.name, userInfo.gender, userInfo.email, userInfo.phone, userInfo.city, userInfo.district, userInfo.address)
            })
    }
    return (
        <>
            <div className="login-wrapper">
                <div className="update-account-container">
                    <div className="large-update-header">Thông tin người dùng</div>
                    <div className="update-account-header">Thay đổi thông tin</div>
                    <div className="info-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="update-title">Tên</td>
                                    <td>
                                        <input type="text" className="form-control" id="name"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Giới tính</td>
                                    <td>
                                        <select name="gender" id="gender" className="custom-select">
                                            <option value="">Không chọn</option>
                                            <option value="male">Nam</option>
                                            <option value="female">Nữ</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Email</td>
                                    <td>
                                        <span id="email-update">thanhtunga2cvp@gmail.com</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Thành phố</td>
                                    <td>
                                        <input type="text" className="form-control" id="city"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Quận</td>
                                    <td>
                                        <input type="text" className="form-control" id="district"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Địa chỉ</td>
                                    <td>
                                        <input type="text" className="form-control" id="address"></input>
                                    </td>
                                </tr>
                                <tr className="password-row">
                                    <td className="update-title">Mật khẩu</td>
                                    <td>
                                        <span className="hidden-pass">******</span>
                                        <button
                                            className="change-pass"
                                            onClick={showUpdatePassword}
                                        >
                                            Đổi mật khẩu
                                        </button>
                                    </td>
                                </tr>
                                <tr className="update-password">
                                    <td className="update-title">Mật khẩu cũ</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="old-password"
                                        ></input>
                                    </td>
                                </tr>
                                <tr className="update-password">
                                    <td className="update-title">Mật khẩu mới</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="new-password"
                                        ></input>
                                    </td>
                                </tr>
                                <tr className="update-password">
                                    <td className="update-title">Nhập lại mật khẩu mới</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="new-password-too"
                                        ></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="update-account-header">Quản lý số điện thoại</div>
                    <table>
                        <tbody>
                            <tr>
                            <td className="update-title">Số điện thoại</td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                    ></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-blue-4 btn-block" onClick={updateInfo}>Lưu thay đổi</button>
                </div>
            </div>
        </>
    );
};
export default UpdateAccount;
