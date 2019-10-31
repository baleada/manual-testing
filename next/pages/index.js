import React, { useState } from 'react'
import useDelayable from '../assets/js/composition/useDelayable'

export default function MyComponent () {
  const [count, setCount] = useState(0)

  const [delayable, invoke] = useDelayable(
    () => setCount(count + 1),
    { delay: 200 }
  )
  function handleClick (evt) {
    invoke('interval')
  }

  // const [navigable2, invoke2] = useDelayable(
  //   ['baleada', 'tortilla', 'logic', 'composition'],
  // )
  // function handleClick2 (evt) {
  //   invoke2('next')
  // }

  return (
    <main>
      <div>
        <button onClick={handleClick}>do stuff</button>
        <span>{ delayable.current.timeElapsed }</span>
      </div>
    </main>
  )
}
