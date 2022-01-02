import "./updateAccount.css";
import axios from "axios";
const UpdateAccount = (props) => {
    function testHeader(){
        let config = {
            headers : {
                Authorization: props.user.headerKey
            } 
        }
        console.log(props)
        console.log(props.headerKey);
        axios.get('http://localhost:8400/v1/user', config).then((res)=> {console.log(res)})
    }
    function showUpdatePassword() {
        document.getElementsByClassName("password-row")[0].style.display = "none";
        document.getElementsByClassName("update-password")[0].style.display =
            "table-row";
        document.getElementsByClassName("update-password")[1].style.display =
            "table-row";
        document.getElementsByClassName("update-password")[2].style.display =
            "table-row";
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
                                        <input type="text" className="form-control"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Giới tính</td>
                                    <td>
                                        <select name="gender" className="custom-select">
                                            <option value="0">Không chọn</option>
                                            <option value="1">Nam</option>
                                            <option value="2">Nữ</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Email</td>
                                    <td>
                                        <span id="email-update">thanhtunga2cvp@gmail.com</span>
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
                        <button className="btn btn-blue-4 btn-block" onClick={testHeader}>Lưu thay đổi</button>
                    </div>
                    <div className="update-account-header">Quản lý số điện thoại</div>
                    <table>
                        <tbody>
                            <tr>
                            <td className="update-title">Nhập lại mật khẩu mới</td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="new-password"
                                    ></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default UpdateAccount;
