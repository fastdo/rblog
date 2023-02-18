import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'

function Post() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data)
      })
  }, [id])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <div className="text-lg font-semibold">
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default Post
