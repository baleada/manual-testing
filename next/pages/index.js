import React, { useState } from 'react'
import useNavigable from '../assets/js/composition/useNavigable'

export default function MyComponent () {
  const navigable = useNavigable(
    ['baleada', 'tortilla', 'logic', 'composition'],
  )

  function handleClick (evt) {
    navigable.next()
  }

  return (
    <main>
      <button onClick={handleClick}>do stuff</button>
      <span>{ navigable.item }</span>
    </main>
  )
}
