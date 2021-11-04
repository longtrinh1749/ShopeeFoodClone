import "./corporation.scss";

const Corporation = () => {
    return (
        <>
            <div className="corporation">
                <div className="container corporation-1">
                    <p className="corporation-1_title">
                        Đơn hàng của bạn sẽ được bảo quản như thế nào?
                    </p>
                    <p className="corporation-1_subtitle">
                        ShopeeFood sẽ bảo quản đơn của bạn bằng túi & thùng để
                        chống nắng mưa, giữ nhiệt... trên đường đi một cách tốt
                        nhất.
                    </p>
                    <img
                        src="/images/Box-food-preservation-footer.png"
                        alt=""
                    />
                </div>
            </div>

            <div className="corporation">
                <div className="container corporation-2">
                    <p className="corporation-1_title">
                        ShopeeFood Merchant App
                    </p>
                    <p className="corporation-1_subtitle">
                        - <b>ShopeeFood Merchant</b> là ứng dụng quản lý đơn
                        hàng cho các nhà hàng đối tác của dịch vụ đặt món tận
                        nơi{" "}
                    </p>
                    <p className="corporation-1_subtitle">
                        - <b>ShopeeFood.vn</b> luôn sẵn sàng hợp tác với các nhà
                        hàng, quán ăn, cafe... để mở rộng kinh doanh cũng như
                        gia tăng khách hàng. Hãy kết nối vào hệ thống đặt và
                        giao hàng để giảm bớt chi phí quản lý, vận hành,
                        marketing, công nghệ... <br /> Đăng ký tham gia:{" "}
                        <b>
                            <a href="https://shopeefood.vn/merchant-register">
                                tại đây
                            </a>
                        </b>
                    </p>
                    <div className="corporation-2_img">
                        <img
                            src="/images/banner-phone-reg-merchant.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="corporation">
                <div className="container corporation-2 corporation-3">
                    <p className="corporation-1_title">
                        ShopeeFood.vn Hợp tác nhân viên giao nhận - ShopeeFood
                        Driver
                    </p>
                    <p className="corporation-1_subtitle">
                        Giúp bạn tăng thu nhập trong thời gian rảnh rỗi
                    </p>
                    <p className="corporation-1_subtitle">
                        ShopeeFood tìm kiếm hợp tác với các cá nhân để thực hiện
                        việc giao hàng, chúng tôi sẽ cung cấp ứng dụng (app), 1
                        số dụng cụ cần thiết để bạn có thể tiếp nhận & giao
                        hàng, kiếm thêm thu nhập Đăng ký tham gia tại đây hoặc
                        gửi Email qua tuyendung@gofast.vn - hoặc gọi qua số điện
                        thoại (028) 7109 9179.
                    </p>
                    <div className="corporation-2_img">
                        <img
                            src="/images/bg-deliverynow-dat-mon-truc-tuyen-giao-hang-tan-noi.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Corporation;
