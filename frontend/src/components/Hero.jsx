import React from 'react'

const Hero = () => {
  return (
    <div>
      <h1>Welcome to Our App</h1>

      <p>Your journey starts here</p>
      <div style={{ display: flex, alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2>Discover Opportunities</h2>
          <p>Find your dream job with us.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Hero"
          style={{ width: '300px', height: 'auto', borderRadius: '8px', marginLeft: '32px' }}
        />
      </div>
    </div>
  )   

}

export default Hero
