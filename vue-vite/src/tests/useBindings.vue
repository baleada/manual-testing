<template>
  <div ref="el">useBindings</div>
  <button @click="count++">count up</button>
</template>

<script>
import { ref } from 'vue'
import { useBindings } from '@baleada/vue-features/util'

export default {
  setup () {
    const el = ref(null),
          count = ref(0)
    
    useBindings({
      target: el,
      bindings: {
        id: count,
        'aria-label': 'my special thing',
        'style.backgroundColor': 'rebeccapurple',
        class: 'my-class',
      }
    })

    return {
      el,
      count,
    }
  }
}
</script>
