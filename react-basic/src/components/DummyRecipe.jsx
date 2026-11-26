import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './DummyRecipe.css'

const DummyRecipe = () => {
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let mounted = true;

        const fetchRecipes = async () => {
            setLoading(true)
            setError(null)

            try {
                const res = await axios.get('https://dummyjson.com/recipes')
                if (mounted) setRecipes(res.data.recipes)
                console.log(res.data.recipes)

            } catch (error) {
                if (mounted) setError('데이터를 불러오지 못했습니다.')
            } finally {
                if (mounted) setLoading(false)
            }
        }

        fetchRecipes()

        return () => {
            mounted = false
        }
    }, [])


    return (
        <div className='recipes-wrap'>
            <h2>recipes</h2>
            <ul>
                {recipes.map((r) => {
                    return (
                        <li>
                            <span key={r.id}>{r.id}</span>
                            <div className="img-wrap">
                                <img src={r.image} alt={r.name} />
                            </div>
                            <h2>{r.name}</h2>
                            <ol>
                                {r.instructions.map((i) => (
                                    <li key={i}>{i}</li>
                                ))}
                            </ol>
                            {/* tag */}
                            {r.tags.map((t) => (

                                <span key={t}>{t}</span>
                            ))}
                        </li>)
                })}
            </ul>
        </div >
    )
}

export default DummyRecipe