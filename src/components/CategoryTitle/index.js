import React from 'react'
function CategoryTitle({ title }) {
  return (
    <h4 style={{
      fontSize: '1.125rem',
      margin: '1.25rem 0'
    }}>
      {title}
    </h4>
  )
}

export default CategoryTitle
