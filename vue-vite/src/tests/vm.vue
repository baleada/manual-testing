<template functional>
  <div ref="baleada">see console</div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue'
import * as vue from 'vue'

export default {
  setup () {
    const baleada = ref(null)
    console.log(getCurrentInstance())
    console.log(vue)

    onMounted(() => {
      console.log(baleada)
    })

    return {
      baleada,
    }
  }
}
</script>
