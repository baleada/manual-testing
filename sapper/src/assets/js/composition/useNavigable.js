import { Navigable } from '@baleada/logic'
import onChange from 'on-change'

export default function useNavigable (state, options) {
  let instance = new Navigable(state, options)

  const reactiveInstance = onChange(instance, (path, value) => {
          instance = value
        }),
        invoke = (method, args = []) => {
          reactiveInstance[method](...args) 
        }

  return [instance, invoke]
}
