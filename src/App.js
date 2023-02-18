import { useState, useEffect } from 'react'
import './index.css'
import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: 'YOUR_ACCESS_KEY_HERE',
})

function App() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    unsplash.photos
      .list({ query: 'nature', perPage: 6 })
      .then((result) => {
        if (result.errors) {
          console.log(result.errors[0])
        } else {
          setPhotos(result.response.results)
        }
      })
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My Blog</h1>
      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  )
}

export default App
