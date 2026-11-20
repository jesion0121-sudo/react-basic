import React from 'react'

const Visual = ({sub, title}) => {


    const onClickButton = () => {
        console.log(title);

    }

    return (
        <div className='visual'>
            {/* App.jsx 에서 보낸 데이터 나오게 하기 */}
            <p>{sub}</p>
            <h2>{title}</h2>
            <button
                className='btn'
                onClick={onClickButton}
            >메뉴보러가기</button>
        </div>
    )
}

export default Visual