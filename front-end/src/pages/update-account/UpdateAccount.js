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
                    <div className="large-update-header">Th??ng tin ng?????i d??ng</div>
                    <div className="update-account-header">Thay ?????i th??ng tin</div>
                    <div className="info-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="update-title">T??n</td>
                                    <td>
                                        <input type="text" className="form-control" id="name"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Gi???i t??nh</td>
                                    <td>
                                        <select name="gender" id="gender" className="custom-select">
                                            <option value="">Kh??ng ch???n</option>
                                            <option value="male">Nam</option>
                                            <option value="female">N???</option>
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
                                    <td className="update-title">Th??nh ph???</td>
                                    <td>
                                        <input type="text" className="form-control" id="city"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">Qu???n</td>
                                    <td>
                                        <input type="text" className="form-control" id="district"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="update-title">?????a ch???</td>
                                    <td>
                                        <input type="text" className="form-control" id="address"></input>
                                    </td>
                                </tr>
                                <tr className="password-row">
                                    <td className="update-title">M???t kh???u</td>
                                    <td>
                                        <span className="hidden-pass">******</span>
                                        <button
                                            className="change-pass"
                                            onClick={showUpdatePassword}
                                        >
                                            ?????i m???t kh???u
                                        </button>
                                    </td>
                                </tr>
                                <tr className="update-password">
                                    <td className="update-title">M???t kh???u c??</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="old-password"
                                        ></input>
                                    </td>
                                </tr>
                                <tr className="update-password">
                                    <td className="update-title">M???t kh???u m???i</td>
                                    <td>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="new-password"
                                        ></input>
                                    </td>
                                </tr>
                                <tr className="update-password">
                                    <td className="update-title">Nh???p l???i m???t kh???u m???i</td>
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
                    <div className="update-account-header">Qu???n l?? s??? ??i???n tho???i</div>
                    <table>
                        <tbody>
                            <tr>
                            <td className="update-title">S??? ??i???n tho???i</td>
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
                    <button className="btn btn-blue-4 btn-block" onClick={updateInfo}>L??u thay ?????i</button>
                </div>
            </div>
        </>
    );
};
export default UpdateAccount;
