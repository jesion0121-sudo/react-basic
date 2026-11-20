import React from 'react'

const Button = ({ text, Color = 'gray',children=null }) => {

    const onClickButton=()=>{
        console.log(text)
    }
    return (
        <button
            style={{ color: Color }}
            onClick={onClickButton}
            
        >
            {text}-{Color}
            {children}
        </button>
    )
}

export default Button