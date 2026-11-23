import React, {useState} from 'react'

const Exam3 = () => {
  const [input, setInput]=useState('')

  const onChangeInput=(e)=>{
    setInput(e.target.value)

  }
  
  return (
    <div>
      <input type="text" 
      onChange={onChangeInput}
      value={input} />
    </div>
  )
}

export default Exam3