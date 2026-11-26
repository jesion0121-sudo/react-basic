import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState('')



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                setTodos(res.data.slice(1,5))
                console.log(res.data);

                setLoading(false)
                    .catch((err) => {
                        console.log(err)
                        setError('데이터를 가져오지 못했습니다.')
                        setLoading(false)

                    })
            })
            .catch()
    }, [])

    const filtered = useMemo(() => {

        return todos
            .filter((t) =>
                t.title.toLowerCase().includes(posts.toLowerCase()))
            .sort((a, b) => a.title - b.name)
    })

    if (loading) return <p>로딩중...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h2>투두리스트</h2>
            <input type="text" placeholder='할일 검색' />
            <ul>
                {filtered.map((user) => (
                    <li key={user.id}>
                        {user.title}
                        {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList