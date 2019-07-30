import React from 'react'

export default function Main({ children }) {
  return (
    <div className="Main">
      <div className="Main-container">
        { children }
      </div>
    </div>
  )
}
