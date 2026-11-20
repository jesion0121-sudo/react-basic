import React from 'react'

const PostItem=({title, author})=> {
  return (
    <div>
        <h1>{title} - {author}</h1>

    </div>
  )
}

export default PostItem