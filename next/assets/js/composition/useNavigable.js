import { useReducer } from "react"
import { Navigable } from '@baleada/logic'
import onChange from 'on-change'

let store

export default function useNavigable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Navigable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
