import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const data = response.data
      setPosts(data)
    }

    fetchData()
  }, [])

  const [images, setImages] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          count: 6,
          orientation: 'landscape',
          query: 'nature',
        },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      })
      const data = response.data
      setImages(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <Link to={`/posts/${post.id}`}>
              {images.length > 0 && (
                <img
                  src={images[Math.floor(Math.random() * images.length)].urls.small}
                  alt="Post cover"
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
