import './voucher.css'
const Voucher = (props) => {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    function formatDbTime(dbTime) {
        if (dbTime == null) return ''
        let formatedTime = '';
        const date = dbTime.split('T');
        const datePieces = date[0].split('-');
        const time = date[1].split('.')
        formatedTime = formatedTime.concat(datePieces[2]).concat('-' + datePieces[1]).concat('-' + datePieces[0]);
        return formatedTime
    }
    function checkExpired(date){
        let now = new Date();
        // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let expiredDate = date.split('-');
        if (parseInt(expiredDate[2]) > now.getFullYear()) return 'Còn hạn'
            else if (parseInt(expiredDate[1]) > now.getMonth() + 1) return 'Còn hạn'
                else if ( parseInt(expiredDate[0]) > now.getDate()) return 'Còn hạn'
                    else {
                        let expires = document.getElementsByClassName('expired');
                        for ( let i = 0; i < expires.length; i++){
                            expires[i].style = "color: red"
                        }
                        return 'Hết hạn'
                    } 
    }
    return (
        <div className="history-table-row">
              <div className="history-table-cell code">{props.voucher.voucherCode}</div>
              <div className="history-table-cell discount">{props.voucher.discount}</div>
              <div className="history-table-cell">{props.voucher.limitPrice}</div>
              <div className="history-table-cell">{formatDbTime(props.voucher.expired)}</div>
              <div className="history-table-cell expired">{checkExpired(formatDbTime(props.voucher.expired))}</div>
            </div>
    )
}
export default Voucher