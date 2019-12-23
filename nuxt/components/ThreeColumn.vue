<template lang="html">
  <div class="">
    <ul>
      <li v-for="heading in headings">{{ heading.text }}</li>
    </ul>
    <nuxt />
  </div>
</template>

<script>
import { ref, computed, watch, inject, onMounted } from '@vue/composition-api'

import { useSymbol } from '@baleada/prose/vue'

export default {
  setup () {
    const headings = inject(useSymbol('layout', 'headings'))

    return {
      headings
    }
  },
}
</script>
