import React from 'react';
import '../../index.css'
import '../../App.css'

function NewsCT(props){
    return (
      <form2 className = "form3">
        <div className="Contents">
          <div className="right">
            <div className="right-news">
              <div className="title-news">
                {props.titleNews}
              </div>
              <div className="block-r">
                <div className="anh-r">
                  <img className="img-r" src={props.srcimg} alt={1} />
                </div>
                  <div className="content-r">
                    <h4>Hướng dẫn học REACTJS</h4>
                    <br />
                    <p>Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</p>            
                </div>
              </div>
              <div className="block-r">
                <div className="anh-r">
                  <img className="img-r" src={props.srcimg} alt={1} />
                </div>
                <div className="content-r">
                  <b>Hướng dẫn học REACTJS</b>
                  <br />
                  <p>Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</p>            
                </div>
              </div>
            </div>
          </div>
        </div>
        </form2>
      );
}

export default NewsCT
