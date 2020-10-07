import React from 'react';
import '../../index.css'
import '../../App.css'


function FormCT(){
  return (
    <form2 className = "form2">
    <div className="Contentsside">
      <div className="Sidebar">
        <div className="right-form">
          <div className="form">
            <h2>ĐĂNG KÝ NHẬN BÀI VIẾT MỚI</h2>
            <p> Đăng ký ngay nhé</p>
            <input type="text" placeholder="TÊN CỦA BẠN" />
            <br></br>
            <input type="text" placeholder="EMAIL CỦA BẠN" />
            <br></br>
            <input className="checkbox" type="checkbox" />
            <label>Toi dong y voi cac dieu khoan</label>
            <p className="p-check">Đăng ký với chúng tôi để có nhiều trải nghiệm học tập tốt hơn</p>
            <button className="btn">ĐĂNG KÝ</button>
            <p>-------------------------------------</p>
          </div>
        </div>
      </div>
    </div>
    </form2>
  );
}
export default FormCT