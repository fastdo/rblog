import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12">
        <img
          src="https://picsum.photos/id/1015/400/400"
          alt="Team"
          className="rounded-full h-64 w-64 object-cover object-center mb-4 lg:mb-0"
        />
        <div className="text-lg font-semibold">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit, neque eget suscipit vestibulum, tortor turpis sodales
            lectus, eget egestas velit est vel dolor. Nulla auctor mattis
            mauris, vel faucibus metus cursus a. Duis in ultrices magna.
          </p>
          <br />
          <p>
            Quisque eget vestibulum erat. Nulla sit amet turpis luctus, luctus
            est vel, commodo libero. Donec non risus quis nibh vestibulum
            condimentum. Morbi nec ipsum vel purus congue fermentum sit amet
            eget velit. Vivamus euismod congue tellus id mollis. Nullam et
            diam eu nisi lobortis maximus vel at eros. Integer nec sapien ac
            libero dignissim venenatis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
