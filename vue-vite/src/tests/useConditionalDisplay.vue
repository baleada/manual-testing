<template>
  <button @click="condition = !condition">toggle</button>
  <div ref="el">useConditionalDisplay</div>
</template>

<script>
import { ref } from 'vue'
import { useConditionalDisplay } from '@baleada/vue-features/util'

export default {
  setup () {
    const el = ref(null),
          condition = ref(true)
    
    useConditionalDisplay({
      target: el,
      condition,
    })

    return {
      el,
      condition,
    }
  }
}
</script>
