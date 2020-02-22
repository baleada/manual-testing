<template>
  <div>{{ text.message }}</div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'

export default {
  props: {
    text: {
      type: Object,
    }
  },
}
</script>
