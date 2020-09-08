<template functional>
  <div ref="baleada">see console</div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue'
import * as vue from 'vue'

export default {
  setup (props, context) {
    const baleada = ref(null)
    console.log(vue)

    return {
      baleada,
    }
  }
}
</script>
