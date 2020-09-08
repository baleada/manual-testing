<template>
  <div>
    <button ref="el" class="p-3 rounded-4 shadow-4 bg-purple-900 text-purple-200">I'm listening</button>
  </div>
  <div class="mt-4">
    <span>{{ lastEvent }}</span>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useListeners } from '@baleada/vue-features/util'

export default {
  setup () {
    const el = ref(null),
          lastEvent = ref('ready')
    
    useListeners({
      target: el,
      listeners: {
        mouseover () {
          lastEvent.value = 'mouseover'
        },
        mouseout: {
          callback () {
            lastEvent.value = 'mouseout'
          }
        }
      }
    })

    return {
      el,
      lastEvent,
    }
  }
}
</script>
