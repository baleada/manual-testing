<template lang="html">
  <section>
    <button @click="() => navigateable.next()">Next</button>
    <pre><code>{{ navigateable.location }}</code></pre>
  </section>
</template>

<script>
import { useNavigateable } from '@baleada/composition-vue'

export default {
  setup () {
    return {
      navigateable: useNavigateable([
        'tortilla',
        'beans',
        'huevito',
        'aguacate',
        'mantequilla',
      ])
    }
  }
}
</script>