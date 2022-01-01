import './updateAccount.css'
const UpdateAccount = ()=>{
    return(
        <>
        <div className='login-wrapper'>
            <div className='content-container'>
                <div className='update-account-header'>
                    Thay đổi thông tin
                </div>
                <div className='info-table'>
                    <table>
                        <tr>
                            <td>
                                Tên
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Giới tính 
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Mật khẩu
                            </td>
                            <td>
                                <input type="text"></input>
                                <button>Đổi mật khẩu</button>
                            </td>
                        </tr>
                    </table>
                    <button >Lưu thay đổi</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default UpdateAccount;