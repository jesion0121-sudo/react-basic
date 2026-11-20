import React from 'react'

const Main = ({ content='컨텐츠입니다.', bgColor }) => {
    return (
        <div
            style={{ backgroundColor: bgColor }}
        >
            {content} - {bgColor}
        </div>
    )
}

export default Main