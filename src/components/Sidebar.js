import React from 'react'

export default function Sidebar({ children }) {
  return (
    <div className="Sidebar">
      <div className="Sidebar-container">
        {children}
      </div>
    </div>
  )
}
