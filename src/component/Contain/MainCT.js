import React from 'react';
import '../../index.css'
import '../../App.css'

function MainCT(props){
    return (
      <form className = "form1">
        <div className="Contents">
          <div className="Contain">
            <h1 className = "title-left">{props.titleLeft}</h1>
            <div className="block bdtop">
              <div className="anh">
                <img className="img" src={props.srcimg} alt={1} />
              </div>
              <div className="content">
                <h3>{props.titleImg}</h3>
                <br />
                <p className="p1">Posted by Tri Duong | Th7 10 2016 | Javascript</p>
                <p className="p1">React | 5stars</p>
                <p className="p3-main">Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</p>
                <br />
                <button className="btn-main">READ MORE</button>
              </div>
            </div>
            <div className="block">
              <div className="anh">
                <img className="img" src={props.srcimg} alt={1} />
              </div>
              <div className="content">
                <h3>{props.titleImg}</h3>
                <br />
                <p className="p1">Posted by Tri Duong | Th7 10 2016 | Javascript</p>
                <p className="p1">React | 5stars</p>
                <p className="p3-main">Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</p>
                <br />
                <button className="btn-main">READ MORE</button>
              </div>
            </div>
            <div className="block">
              <div className="anh">
                <img className="img" src={props.srcimg} alt={1} />
              </div>
              <div className="content">
                <h3>{props.titleImg}</h3>
                <br />
                <p className="p1">Posted by Tri Duong | Th7 10 2016 | Javascript</p>
                <p className="p1">React | 5stars</p>
                <p className="p3-main">Sau một thời gian tìm hiểu và áp dụng rất hiểu quả,hôm nay mình chia sẻ với các bạn cấu trúc thư...</p>
                <br />
                <button className="btn-main">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      );
}

export default MainCT
