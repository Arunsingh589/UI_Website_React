import React from 'react'

const Rightbar = ({ data2, bgColor, color }) => {
  return (
    <>
      <div className="right_container"
        style={{
          backgroundColor: `${bgColor}`,
          color: 'white'
        }}>
        <div className="postImg">
          <img id='_img'
            src={data2.img}
            alt="" />
          <div className="inside_img">
            <div className="img">
              <img src={data2.authorImg} alt="" />
            </div>
            <div className="text">
              <h3>{data2.authorName}</h3>
              <p>{data2.authortext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rightbar
