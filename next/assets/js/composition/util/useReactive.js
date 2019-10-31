import { useRef, useEffect } from "react"
import onChange from 'on-change'
import useForceUpdate from './useForceUpdate'

export default function useReactive (object) {
  const ref = useRef(object),
        forceUpdate = useRef(useForceUpdate()),
        reactiveInstance = onChange(ref.current, (path, value) => {
          ref.current = value
          forceUpdate.current()
        }),
        invoke = (method, args = []) => {
          reactiveInstance[method].bind(reactiveInstance)(...args)
        }

  useEffect(() => {
    return () => onChange.unsubscribe(reactiveInstance)
  })

  return [ref, invoke]
}
