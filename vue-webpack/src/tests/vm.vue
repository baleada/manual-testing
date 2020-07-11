<template functional>
  <div>see console</div>
</template>

<script>
import { getCurrentInstance } from 'vue'

export default {
  setup () {
    console.log(getCurrentInstance())
  }
}
</script>