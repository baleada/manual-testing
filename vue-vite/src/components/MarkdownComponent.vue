<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MarkdownComponent',
  setup () {
    return {
      count: ref(0),
    }
  }
}
</script>