import React from 'react'

const Book = () => {
  return (
    <div className="flex flex-row p-[2vw] m-[2vw] border-[0.2vw] border-blue-50">
        <div>
            <img src="https://m.media-amazon.com/images/I/711xMzVPIuL._AC_UY218_.jpg"></img>
        </div>
        <div>
            <p>Think and Grow Rich: THE 21st CENTURY EDITION</p>
            <p>by <span>Napolean Hill</span> | 1 March 2020</p>
            <p><span>&#8377;</span>139</p>
        </div>
    </div>
  )
}

export default Book;